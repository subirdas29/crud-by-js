

const allPost = async()=>{
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    // console.log(data);
    
    postHandle(data)
}

allPost()

// Get post

const postHandle = post =>{
    const postShow = document.getElementById('post')

    // const post = posts.slice(0,20)

    console.log(post.length);
    
    post.forEach(post=>{
        const allPost = document.createElement('p')

    allPost.innerHTML = `
                <div class="card-body">
                  <h2 class="card-title">${post.title}</h2>
                  <p>${post.body}</p>
                  
                </div>
    `
    postShow.appendChild(allPost)
    
    console.log(post)
    })

}


// create post

const createPost = (title,textAreas)=>{
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: textAreas,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(data => console.log(data));
}




const postText=()=>{
    const title = document.getElementById('title')
    const textArea = document.getElementById('textarea')
    const textTile = title.value
    const textAreas = textArea.value
    createPost(textTile,textAreas)

}

{/* <div class="card-actions justify-center">
                    <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
                  </div> */}