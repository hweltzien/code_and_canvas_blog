//reference to the DOM element
const formEl = document.querySelector('#myForm');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const msgDiv = document.querySelector('#msg');
const submitBtn = document.querySelector('.submitBtn');
//all blog posts are saved in local storage and saved to an array
const allBlogPost = JSON.parse(localStorage.getItem('blogPosts')) || [];

//display blog post 
//  renderBlogPost();

//changing text content to a message depending on conditions
 function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
 }
//calling items from local storage
function renderBlogPost() {
    const username = localStorage.getItem('username');
    const title = localStorage.getItem('title');
    const content = localStorage.getItem('content');

    usernameInput.textContent = username;
    titleInput.textContent = title;
    contentInput.textContent = content;
}
//checking that user input is provided on clicking "submit"
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;
console.log(username, title)
    if (username === '') {
        // displayMessage('error', 'Username cannot be blank');
        alert("Username cannot be blank")
        return;
    } else if (title === '') {
        //displayMessage('error', 'Please provide title');
        alert("Please provide title")
        return;
    } else {
        displayMessage('success', 'Posted!');
       
        localStorage.setItem('username', username);
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);
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
    window.location.assign("blog.html")
});




