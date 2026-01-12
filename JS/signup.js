const form=document.getElementById('signup-form');
const alertBox=document.getElementById('alert');

// show/hide password
document.querySelector('.show-pass').addEventListener('click',()=>{
  const passInput=form.querySelector('input[name="password"]');
  passInput.type = passInput.type === "password" ? "text" : "password";
});

form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const user=data.get('username').trim();
  const email=data.get('email').trim();
  const pass=data.get('password').trim();

  const userRegex=/^[a-zA-Z0-9]{3,15}$/;
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!userRegex.test(user)){
    showAlert("Username 3-15 letters/numbers only");
    return;
  }
  if(!emailRegex.test(email)){
    showAlert("Enter valid email");
    return;
  }
  if(pass.length<6){
    showAlert("Password must be at least 6 chars");
    return;
  }

  localStorage.setItem("baristaUser", user);
  localStorage.setItem("baristaEmail", email);
  localStorage.setItem("baristaPass", pass);

  showAlert(" Account created!");
  setTimeout(()=>window.location.href="login.html",1500);
});

function showAlert(msg){
  alertBox.textContent=msg;
  alertBox.classList.add("show");
  setTimeout(()=>alertBox.classList.remove("show"),3000);
}