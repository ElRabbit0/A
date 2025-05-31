let slides = document.querySelectorAll('.slide');
let counter = document.getElementById('counter');

const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');

let index = 0;
goToSlide(index);
function goToSlide(newIndex){
    for (let elem of slides)
    {
        elem.className = ' ' + 'slide';
    }
    if(newIndex < 0)
    {
        index = slides.length - 1;
        slides[index-1].className+= ' ' + 'first-slide'
        slides[index].className+= ' ' + 'second-slide'
        slides[0].className+= ' ' + 'third-slide'
    }
    else if(newIndex > slides.length - 1)
    {
        index = 0;
        slides[slides.length - 1].className+= ' ' + 'first-slide'
        slides[index].className+= ' ' + 'second-slide'
        slides[index+1].className+= ' ' + 'third-slide'
    }
    else{
        index = newIndex;
        if(index == 0)
        {
            slides[slides.length - 1].className+= ' ' + 'first-slide'
            slides[index].className+= ' ' + 'second-slide'
            slides[index+1].className+= ' ' + 'third-slide'
        }
        else if(index == slides.length-1)
        {
            slides[index-1].className+= ' ' + 'first-slide'
            slides[index].className+= ' ' + 'second-slide'
            slides[0].className+= ' ' + 'third-slide'
        }
        else{
            slides[index-1].className+= ' ' + 'first-slide'
            slides[index].className+= ' ' + 'second-slide'
            slides[index+1].className+= ' ' + 'third-slide'
        }
    }
    counter.innerHTML = ' ';
    for (let i = 0; i < slides.length; i++)
    {
        if(i == index)
        {
            counter.innerHTML+= '●';
        }
        else
        {
            counter.innerHTML+= '○';
        }
    }
    console.log(index);
}

backButton.addEventListener('click', ()=>{goToSlide(index-1)});
nextButton.addEventListener('click', ()=>{goToSlide(index+1)});