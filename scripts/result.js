let carouselHTML = document.querySelector('.img-hotel');
let scrollX = 0;
if(window.screen.width > 400)
{
    scrollX = window.screen.width / 4;
    carouselHTML.scrollTo(scrollX , 0);
}
else{
    scrollX = window.screen.width;
    carouselHTML.scrollTo(scrollX , 0);
}
console.log(scrollX);