const email = document.getElementById("email");
const pass = document.getElementById("password");
const loginForm = document.getElementById("log");

let arr;

if(localStorage.getItem("users")){
   arr = JSON.parse(localStorage.getItem("users"));
}else{
   arr =[];
}

loginForm.addEventListener("click", function (e) {
   alert("salam");
   e.preventDefault;
   let istifadeci = true;

   for (let i = 0; i < arr.length; i++) {
      if (email.value == arr[i].Email) {
         istifadeci = false;
         if (pass.value == arr[i].pass) {
            alert("Hesab Dogrulandi");
            localStorage.setItem("currentUser",arr[i].fname);
            localStorage.setItem("useremail", arr[i].Email)
            window.location.assign("index.html");
         } else {
            alert("Parol Yanlishdir");
         }
      }
   }
   if (istifadeci) {
      alert("Bele Bir Hesab Yoxdur");
   };
});