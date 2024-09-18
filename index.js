
const allPost = async()=>{
  const res = await fetch('http://localhost:3000/posts')
  const posts = await res.json()
  showPost(posts)
  console.log(posts);
  
}

allPost()

//  Get Post

const showPost = (posts) =>{
  const postText = document.getElementById('post')

  posts.forEach(post =>{
    
    const div = document.createElement('div')
    div.innerHTML = `
    <h1 class="text-2xl font-bold">${post.title}</h1>
    <p>${post.body}</p>
    <div class="mt-6 mb-12">
      <button class="text-blue-400 mr-10" onclick="editPosts('${post.id}')">Edit</button>
    <button class="text-blue-400">Delete</button>
    </div>
    `
    postText.appendChild(div)
    
  })

}

  // Add Post

  const newPost = async (addTitle,addTextArea) =>{
    const newData = {
      title: addTitle,
      body: addTextArea,
      userId: 1
    }
   
   const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const newPost = await res.json()
    return newPost
      
  }

 const addText = () =>{
  const title= document.getElementById('title')
  const textArea = document.getElementById('textArea')

  const addTitle = title.value
  const addTextArea = textArea.value

  newPost(addTitle,addTextArea)
 }



//  Edit Post

const editPosts = async (id)=>{
  const edit = document.getElementById('editpost')
  const editTitle = document.getElementById('editTitle')
  const editBody = document.getElementById('editBody')
  const editSubmit = document.getElementById('editSubmit')
  console.log(id)
  edit.showModal()

  const newEditTitle = editTitle.value
  const newEditbody = editBody.value
  

  edit.innerHTML = `
  <div class="modal-box flex flex-col items-center">
        <input class="text-lg font-bold input input-bordered input-secondary  w-full my-8 max-w-xs" id="editTitle"></input>
        <textarea class="py-4 input input-bordered input-secondary  w-full max-w-xs mb-8" id="editBody"></textarea>
        
        <div class="flex justify-center items-center">
            <button class="btn mr-6" onclick="newPostEdit()" id="editSubmit" >Submit</button>
            <div class="modal-action mt-0">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                 
                  <button class="btn">Close</button>
                 
                </form>
              </div>
        </div>
      </div>
  `


  

  // editSubmit.onclick(newPostEdit(newEditTitle,newEditbody,id))
  // newPostEdit(newEditTitle,newEditbody,id)
  
}


const newPostEdit = async(newEditTitle,newEditbody,id) =>{

  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: newEditTitle,
      body: newEditbody,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

    const data = await res.json()
    console.log(data)
}
