
let images= document.getElementsByClassName("list-images");
let active= document.getElementsByClassName("active")[0];



  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


let y=offset(active).top
let x=offset(active).left
for(let i=0;i<images.length;i++){
    images[i].addEventListener('click',function(){
        images[i].style.animation = 'none';
		setTimeout(() => {
			images[i].style.animation = '';
		}, 0);

        setTimeout(() => {
    let temp;
    unfade(active)

        temp=images[i].src
        images[i].src=active.src
        active.src=temp

    },0)
    
})
    
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

// function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 80);
// }