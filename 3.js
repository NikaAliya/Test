const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const showMessagesButton = document.getElementById("showMessagesButton");
const outputDiv = document.getElementById("output");

showMessagesButton.addEventListener("click", () => {
  
  showMessagesButton.style.display = "none";

 
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(posts => {
     
      const postsHTML = posts.map(post => `
        <div class="message-card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `).join('');

      
      outputDiv.innerHTML = postsHTML;
    })
    .catch(error => {
      console.error('Klaida gavant pranešimus:', error);
      outputDiv.textContent = 'Įvyko klaida gavant pranešimus. Prašome bandyti vėliau.';
    });
});
