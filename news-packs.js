const newsname = document.getElementById("Newsname");
const newstext = document.getElementById("Nwestext");
const newsphoto = document.getElementById("Newsphoto");
const newsowner = document.getElementById("Newsowner");

const newsadd = document.getElementById("Addnews");

const news = document.getElementById("new");

const users = JSON.parse(localStorage.getItem("users"))

newsadd.addEventListener("click", function() {;

     let useremail = localStorage.getItem("useremail");
     users.forEach(function(val){
       if (val.Email === useremail) {
        const newsobyekt = {
          name: newsname.value,
          text: newstext.value,
          photo: newsphoto.value,
          owner: val.fname
      };
         val.books.push(newsobyekt);
         showNewsOnPage(val);
       }
     });
     localStorage.setItem("users", JSON.stringify(users));
   
     function showNewsOnPage(obj){
     let write = `
     <div class="col-lg-2">
     <div class="box">
        <img class="w-100" src="${newsobyekt.photo}" alt="a">
        <p class="my-1">${newsobyekt.name}</p>
        <p class="my-1">${newsobyekt.text}</p>
        <p class="my-1">${newsobyekt.owner}</p>
     </div>
   </div>
     `;
     news.innerHTML += write;
   console.log(newsobyekt);
     }
})