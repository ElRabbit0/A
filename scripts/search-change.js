let fast = document.getElementById('fast-search');
let notFast = document.getElementById('search-form');
let changeButton = document.getElementById('change-but');
let fastForm = true;
let canClick = true;

change();

changeButton.addEventListener('click', ()=>{
    change();
});

function change(){
    if(!fastForm){
        fast.style.display = 'none';
        notFast.style.display = 'block';
        fastForm = true;
    }
    else{
        fast.style.display = 'grid';
        notFast.style.display = 'none';
        fastForm = false;
    }
}