let selects = document.querySelectorAll('.func-select');
for(let i = 0; i < selects.length; i++){
    selects[i].addEventListener('change', ()=>{selected(i)});
}

function selected(num){
    let values = selects[num].value;
    switch(values){
        case '1':
            selects[num].style.color = 'black';
        break;
        case '2':
            selects[num].style.color = 'green';
        break;
        case '3':
            selects[num].style.color = 'red';
        break;
    }
}