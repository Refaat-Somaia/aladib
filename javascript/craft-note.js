let activeIndex = 1;
let notebooks = [
    "../assets/images/craft/1.png",
    "../assets/images/craft/2.png",
    "../assets/images/craft/3.png",
    "../assets/images/craft/4.png",
    "../assets/images/craft/5.png",
    "../assets/images/craft/6.png",
];
let pageLoaded=false;

let background = document.getElementById("bg");



let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");

img1.classList.add('left');
img2.classList.add('active');
img3.classList.add('right');

background.appendChild(img1);
background.appendChild(img2);
background.appendChild(img3);

 function setImagePosition(img, index, className,animationName,direction){

  setTimeout(() => {
    img.style.animation = "none";
    img.src = notebooks[index];
    if(direction){
      img.style.animation='in-from-right 0.3s'
    }
     if(direction==false){
      img.style.animation='from-left-right2 0.3s'
    }
},1000)


    img.style.animation = animationName;
  
}


setImagePosition(img1, 0, "left");
setImagePosition(img2, activeIndex, "active");
setImagePosition(img3, 2, "right");
// $(".right").click(function () {

//   $(".right").css({"animation":"in-left 0.5s"});

//   if(activeIndex-1==-1)
//   activeIndex = (notebooks.length-1);
//   else
//   activeIndex = activeIndex-1;
//   if(notebooks[activeIndex-1]!=null)
//   setImagePosition(img1, activeIndex - 1, "left");
//   else
//   setImagePosition(img1, (notebooks.length-1), "left");
//   setTimeout(function(){
     

//     $(".left").css({"animation":"in-left2 1s"});

//   },500)


// })
img3.addEventListener("click", function () {
  next()
});


img1.addEventListener("click", function () {
  previous()
    

});




document.getElementById('nextBtn').addEventListener("click", function () {
    next()

});


document.getElementById('prevBtn').addEventListener("click", function () {
previous()
});





function previous(){
  if(activeIndex+1==notebooks.length)
  activeIndex = 0;
  else
  activeIndex = activeIndex+1;
  
  
  
  if(notebooks[activeIndex-1]!=null)
  setImagePosition(img1, activeIndex - 1, "left","from-left-right 1s");
  else
  setImagePosition(img1, (notebooks.length-1), "left","from-left-right 1s");
  
  
  setImagePosition(img2, activeIndex, "active","active-to-right 1s");
  if (notebooks[activeIndex + 1] != null)
  setImagePosition(img3, activeIndex + 1, "right","right-to-active 1s",false);
  
  else {
  setImagePosition(img3, 0, "right","right-to-active 1s",false);
  }
}

function next(){
  if(activeIndex-1==-1)
  activeIndex = (notebooks.length-1);
  else
  activeIndex = activeIndex-1;
  
  
  
  if(notebooks[activeIndex-1]!=null)
  setImagePosition(img1, activeIndex - 1, "left","to-active 1s",true);
  else
  setImagePosition(img1, (notebooks.length-1), "left","to-active 1s",true);
  
  
  setImagePosition(img2, activeIndex, "active","in-from-left 1s");
  if (notebooks[activeIndex + 1] != null)
  setImagePosition(img3, activeIndex + 1, "right","in-from-active 1s");
  
  else {
  setImagePosition(img3, 0, "right","in-from-active 1s");
  }
}