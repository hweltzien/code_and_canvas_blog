//access HTML elements

const allBlogPost = JSON.parse(localStorage.getItem('blogPosts')) || [];
const dynamicPosts = document.getElementById('dynamicPosts');



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
