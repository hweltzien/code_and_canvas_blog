//reference to the DOM element
const formEl = document.querySelector('.user-form');

const titleInput = document.querySelector('.title');
const contentInput = document.querySelector('.content');
const imageInput = document.querySelector('.image');

const submitBtn = document.querySelector('.submit');

//all blog posts are saved in db


const allBlogPost = fetch ("/api/user", {
    method: "POST",
    body: JSON.stringify({ title, content, image }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("response", response);
    document.location.replace("/user");
  } else {
    alert("Failed to sign up.");
  };
//display blog post 
//  renderBlogPost();

//changing text content depending on conditions
 function displayContent(type, content) {
    contentDiv.textContent = content;
    contentDiv.setAttribute('class', type);
 }

 //calling items from db
 function renderBlogPost() {
    let blogPosts = fetch ("/api/posts");
    blogPosts.forEach((blogPost) => {
        const blogPostDiv = document.createElement('div');
        blogPostDiv.setAttribute('class', 'blog-post');
        blogPostDiv.innerHTML = `
            <h2>${blogPost.title}</h2>
            <p>${blogPost.content}</p>
            <p>${response.username}</p>
        `;
        blogPostDiv.appendChild(blogPostDiv);
    });
 }
// function renderBlogPost ({fetch ("/api/user"), {
    
      
      

    
//     titleInput.textContent = title;
//     contentInput.textContent = content;
// }
//checking that user input is provided on clicking "submit"
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const title = titleInput.value;
    const content = contentInput.value;
console.log(title,content,"Add new post")
    
    if (title === '') {
        //displayMessage('error', 'Please provide title');
        alert("Please provide title")
        return;
    } else {
        displayMessage('success', 'Posted!');
       
        const allBlogPost = fetch ("/api/user", {
            method: "POST",
            body: JSON.stringify({ title, content, image }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            console.log("response", response);
            document.location.replace("/user");
          } else {
            alert("Failed to sign up.");
          };
        renderBlogPost();
    }
    
    // create object from each blog post
    const newBlogPost = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value,
    }
    //push each blog post into the array
    allBlogPost.push(newBlogPost);

    // set new post to local storage
    localStorage.setItem('blogPosts', JSON.stringify(allBlogPost));
    document.location.replace("/posts");
});




