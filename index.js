//Alert bar Closing function
let closeTag = document.querySelector("#closingTag");
let alert = document.querySelector("#alert");
closeTag.addEventListener("click", () => {
  alert.style.display = "none";
});
//mobile view icon
let icon = document.querySelector("#icon");
let sideNavBar = document.querySelector(".sideNavbar");
//let sideNav=document.querySelector("#sideNav");
icon.addEventListener("click", () => {
  sideNavBar.classList.toggle("active");
});

//Slide Container
let slides = document.querySelectorAll(".slide-container");
let slideImage = document.querySelectorAll(".slide-image");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let slideIndex = 0;
for (let i = 0; i < slideImage.length; i++) {
  slideImage[i].style.display = "none";
}
slideImage[slideIndex].style.display = "block";


nextBtn.addEventListener("click", () => {
  slideImage[slideIndex].style.display = "none";
   slideIndex=slideIndex+1;
  // slideImage.classList.add(".slide-image .active")
if(slideIndex>=slideImage.length){
  slideIndex=0;
  console.log(slideIndex);
  
}slideImage[slideIndex].style.display='block'
slideImage[slideIndex].style.opacity = 1;

  
});
prevBtn.addEventListener("click", () => {
 slideImage[slideIndex].style.display='none';
 slideIndex=slideIndex-1;
 //slideImage.classList.add(".slide-image .active")
 if(slideIndex<0){
  slideIndex=slideImage.length-1;

 }
 slideImage[slideIndex].style.display='block';
 slideImage[slideIndex].style.opacity = 1;
});



let likebtn=document.querySelectorAll('.like-buttons');
for(let i=0;i<likebtn.length;i++){
  likebtn[i].addEventListener('click',(e)=>{
  if(e.target.src.indexOf('blackheart.png')>0){
    e.target.src='images/redheart.jpg';
  }else{
    e.target.src='images/blackheart.png';
  }
  
  
  })
}



