//access HTML elements
const backBTN = document.querySelector('.backBtn');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.dark-mode');
const allBlogPost = JSON.parse(localStorage.getItem('blogPosts')) || [];
const dynamicPosts = document.getElementById('dynamicPosts');

//set default mode to light
let mode = 'light';

//listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  //if mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

backBTN.addEventListener('click', function (event) {
  event.preventDefault();
    window.location.assign("index.html")
});


//display list of blog post objects on the DOM

allBlogPost.forEach((element) => {
  const eachPostDiv = document.createElement('div')
  const usernameInput = document.createElement('h4');
  const titleInput = document.createElement('h2');
  const contentInput = document.createElement('p'); 

  dynamicPosts.append(eachPostDiv);
  eachPostDiv.appendChild(usernameInput);
  eachPostDiv.appendChild(titleInput);
  eachPostDiv.appendChild(contentInput);

  eachPostDiv.setAttribute('class', 'eachPostCSS');
  usernameInput.setAttribute('class','usernameCSS');
  titleInput.setAttribute('class', 'titleCSS');
  contentInput.setAttribute('class', 'contentCSS');

  usernameInput.textContent = element.username;
  titleInput.textContent = element.title;
  contentInput.textContent = element.content;


});
