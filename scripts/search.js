let button = document.querySelector('.js-button');
let sort = document.querySelector('.sort');
let isOpen = true;
filterOpen();
button.addEventListener('click', ()=>{filterOpen()});

function filterOpen(){
    if(isOpen){
        sort.style.display = 'none';
        isOpen = false;
        button.innerHTML = '▲';
    }
    else{
        sort.style.display = 'grid';
        isOpen = true;
        button.innerHTML = '▼';
    }
    console.log('1')
}