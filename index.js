
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
      <button class="text-blue-400 mr-10">Edit</button>
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