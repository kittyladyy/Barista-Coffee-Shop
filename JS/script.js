const toggle = document.getElementById('menu-toggle');
const navPages = document.getElementById('nav-pages');

toggle.addEventListener('click', () => {
  navPages.classList.toggle('show');
});

const members = document.querySelectorAll('.team-member');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

members.forEach(member => {
  observer.observe(member);
});
const userBtn = document.getElementById("user-btn");
const userMenu = document.getElementById("user-menu");
const savedUser = localStorage.getItem("baristaUser");

if(savedUser){
  userMenu.innerHTML = `
    <span style="color:#fff;">👋 Hi, ${savedUser}</span>
    <a href="#" id="logout-btn" title="Logout">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3H10v2h10v14H10v2h10c1.1 
        0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      </svg>
    </a>
  `;

  document.getElementById("logout-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("baristaUser");
    localStorage.removeItem("baristaPass");
    alert(" You have logged out.");
    window.location.reload();
  });
}else{
  userBtn.textContent = "Login / Sign up";
  userBtn.href = "login.html";   // 👈 هنا المفتاح
}