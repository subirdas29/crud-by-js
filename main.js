

const allPost = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    // console.log(data);
    
    postHandle(data)
}

allPost()

// Show post

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
    fetch('https://jsonplaceholder.typicode.com/posts', {
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


const allPost1st = async(userId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${userId}`)
    const data = await res.json()
    postadded(data)
    // console.log(data);
    
    
}


const postadded = data =>{
    const postShow = document.getElementById('post')

    // const post = posts.slice(0,20)

    console.log(post.length);
    
    // post.forEach(post=>{
        const allPost = document.createElement('p')

    allPost.innerHTML = `
                <div class="card-body">
                  <h2 class="card-title">${data.title}</h2>
                  <p>${data.body}</p>
                  
                </div>
    `
    postShow.appendChild(allPost)
    
    console.log(post)
    // })

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