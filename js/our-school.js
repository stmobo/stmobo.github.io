var step=1;
var image1=new Image();
var image2=new Image();
var image3=new Image();
var image4=new Image();
var image5=new Image();
var image6=new Image();
var image7=new Image();
var image8=new Image();
var image9=new Image();

function slideit(){
    document.images.slide.src=eval("image"+step+".src");
    if(step<9) {
        step++;
    } else {
        step=1;
    }
    setTimeout("slideit()",3500);
}

$(document).ready(function(){
    image1.src="img/our-school/image1.jpg";
    image2.src="img/our-school/image2.jpg";
    image3.src="img/our-school/image3.jpg";
    image4.src="img/our-school/image4.jpg";
    image5.src="img/our-school/image5.jpg";
    image6.src="img/our-school/image6.jpg";
    image7.src="img/our-school/image7.jpg";
    image8.src="img/our-school/image8.jpg";
    image9.src="img/our-school/image9.png";

    slideit();
});
