const logout = document.querySelector(".outlog");
const userr = document.querySelector("#user");
const log = document.querySelector("#log");
const sign = document.querySelector("#sign");
const newpack = document.querySelector("#new-pack")
const username = document.querySelector(".username");
const userlabel = document.querySelector(".user-data");

if(localStorage.getItem("currentUser")){
   let user = localStorage.getItem("currentUser");
   username.innerText = user;
   log.classList.add("d-none");
   sign.classList.add("d-none");
   logout.classList.remove("d-none");
   userlabel.classList.remove("d-none");
   newpack.classList.remove("d-none");
   userr.classList.remove("d-none");
}
logout.addEventListener("click",function () {
   this.classList.add("d-none");
   newpack.classList.add("d-none");      
   userlabel.classList.add("d-none");
   userr.classList.add("d-none");  
   log.classList.remove("d-none");
   sign.classList.remove("d-none");
   localStorage.removeItem("currentUser");
   window.location.reload();
});