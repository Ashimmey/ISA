const searchBtn = document.getElementById("searchBtn");
const repoList = document.getElementById("repoList");

searchBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();

  if (username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        repoList.innerHTML = "";
        data.forEach((repo) => {
          const repoItem = document.createElement("li");
          const repoLink = document.createElement("a");
          repoLink.href = repo.html_url;
          repoLink.textContent = repo.name;
          repoItem.appendChild(repoLink);
          repoList.appendChild(repoItem);
        });
      })
      .catch((error) => {
        repoList.innerHTML = `<li>${error.message}</li>`;
      });
    }
});
 

