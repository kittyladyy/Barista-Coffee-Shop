const form=document.getElementById('login-form');
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
  const pass=data.get('password').trim();

  const savedUser=localStorage.getItem("baristaUser");
  const savedPass=localStorage.getItem("baristaPass");

  const userRegex=/^[a-zA-Z0-9]{3,15}$/;

  if(!userRegex.test(user)){
    showAlert("Invalid username format");
    return;
  }
  if(pass.length<6){
    showAlert("Password must be at least 6 chars");
    return;
  }

  if(user===savedUser && pass===savedPass){
    showAlert("Welcome "+user+"!");
    setTimeout(()=>window.location.href="index.html",1500);
  }else{
    showAlert("Wrong username or password");
  }
});

function showAlert(msg){
  alertBox.textContent=msg;
  alertBox.classList.add("show");
  setTimeout(()=>alertBox.classList.remove("show"),3000);
}