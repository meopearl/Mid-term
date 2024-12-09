function askName() {
    const name = prompt("What's your name?");
    if (name) {
        // Store name in localStorage and redirect
        localStorage.setItem('userName', name);
        window.location.href = 'secondpage.html';
    } else {
        alert("Please enter your name.");
    }
}

// For secondpage.html
window.onload = function() {
    const userName = localStorage.getItem('userName');

    if (userName) {
        document.getElementById('greeting').textContent = `Welcome, ${userName}!`;
    } else {
        document.getElementById('greeting').textContent = "Hello, guest!";
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("#filter button");
    const recipes = document.querySelectorAll(".recipe");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
  
        filterButtons.forEach(btn => btn.classList.remove("btn-primary"));
        button.classList.add("btn-primary");
  
        recipes.forEach(recipe => {
          if (category === "all" || recipe.getAttribute("data-category") === category) {
            recipe.style.display = "block";
          } else {
            recipe.style.display = "none";
          }
        });
      });
    });
  });
  