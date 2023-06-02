function getPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
        let tablebody=document.querySelector('#posts-table tbody')
        //clear the table
        tablebody.innerHTML=''
        //create and add the new entries from API call
        posts.forEach(post=>{
            let row=document.createElement('tr')

            row.innerHTML=`
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td>
            <button onclick="editPost(${post.id})">Edit</button>
            <button onclick="deletePst(${post.id})">Delete</button>
            </td>
            `;

            tablebody.appendChild(row)
        })
    })
}

async function createPost(event)
{
    event.preventDefault();

//get the form elements
let titleInput=document.getElementById('title')
let bodyInput=document.getElementById('body')

//create new post

let newPost={
    title: titleInput.value,
    body: bodyInput.value,
    userId:1
}

//make the api request to post the data to the server and post it
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(newPost),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

try{
    let postedJSon=await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(newPost),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
         
          let postedObject=await postedJSon.json()
          //clear the form elements
          titleInput.value='';
          bodyInput.value='';
          console.log(postedObject)
        }
        catch(error)
        {
            console.error(error)
        }
    }


let createFormPost=document.getElementById('create-post-form')
//attach an eventListener
createFormPost.addEventListener('submit',createPost);

//get all the posts and display as a table below the form
getPosts();