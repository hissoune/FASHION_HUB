let btn = document.querySelector("button");
let nav = document.querySelector("nav");


btn.addEventListener("click",function(){
    nav.classList.toggle("active");
});
  

let SIGN1 =document.getElementById("B1");
let SIGN2 =document.getElementById("B2");
let SIGN3 =document.getElementById("B3");
let SIGN4 =document.getElementById("B4");
let SIGNUP =document.getElementById("SIGNUP");
let SIGNIN =document.getElementById("SIGNIN");

SIGN1.addEventListener("click",function(){
    

    SIGNIN.style.display="block";
    SIGNUP.style.display="none";
  

});
SIGN2.addEventListener("click",function(){ 
   alert("saved");
});
SIGN4.addEventListener("click",function(){
    

    SIGNIN.style.display="none";
    SIGNUP.style.display="block";
  

});
SIGN3.addEventListener("click",function(){ 
   alert("saved");
});




