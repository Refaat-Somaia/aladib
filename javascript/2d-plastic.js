const imgs= document.getElementsByClassName('img-notebook')
const viewer=document.getElementById("viewNotebook");

imgs[1].style.borderColor='#00ADBC'

function setView(index){

    for(let i=1;i<=imgs.length-1;i++){
        if(i==index)
        imgs[(i)].style.borderColor='#00ADBC'
        else{
            imgs[(i)].style.borderColor='transparent'
        }
    
    }
   
viewer.style.animation = 'none';
		setTimeout(() => {
			viewer.style.animation = '';
  viewer.src='../assets/images/2d-plastic/view/'+index+".png";

		}, 0);
}