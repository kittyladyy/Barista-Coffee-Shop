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
      userBtn.href = "login.html";
    }

    // Hamburger menu
    const menuToggle = document.getElementById("menu-toggle");
    const navPages = document.getElementById("nav-pages");
    const reserveBtn = document.getElementById("reserve-btn");

    menuToggle.addEventListener("click", () => {
      navPages.classList.toggle("active");
      reserveBtn.classList.toggle("active");
    });