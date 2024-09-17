

const allPost = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    // console.log(data);
    
    postHandle(data)
}


// Show post

const postHandle = posts =>{
    const postShow = document.getElementById('post')

    const post = posts.slice(0,20)

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

const createPost = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


allPost()

{/* <div class="card-actions justify-center">
                    <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
                  </div> */}