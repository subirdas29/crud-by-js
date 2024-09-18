
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
    <button class="text-blue-400" onclick="deletePost('${post.id}')">Delete</button>
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
  const btn = document.getElementById('btn')
  const editTitle = document.getElementById('editTitle')
  const editBody = document.getElementById('editBody')

  const res = await fetch(`http://localhost:3000/posts/${id}`)
  const post = await res.json()

  editTitle.value = post.title
  editBody.value = post.body

  console.log(id)
  edit.showModal()

  btn.innerHTML = `
  
            <button class="btn mr-6" onclick="newPostEdit('${id}')" >Submit</button>
            <div class="modal-action mt-0">
                <form method="dialog">
                  <button class="btn">Close</button>
                </form>
              
        </div>
     
  `
}


const newPostEdit = async(id) =>{
  console.log(id)
  



  const editTitle = document.getElementById('editTitle')
  const editBody = document.getElementById('editBody')

  let newEditTitle = editTitle.value
  let newEditbody = editBody.value
  

  console.log(newEditTitle,newEditbody)

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


//Delete Post


const deletePost = (id)=>{
  
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });
}