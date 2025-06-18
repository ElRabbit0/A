const inputFile = document.getElementById('input-file');
const icon = document.querySelector('.input-file-icon');
icon.innerHTML = '<img src="../img/add-anim.gif">';
icon.innerHTML = '<img src="../img/add-icon.png">';
inputFile.addEventListener('click', ()=>{
    icon.innerHTML = '<img src="../img/add-anim.gif">';
    setTimeout(()=>{icon.innerHTML = '<img src="../img/add-icon.png">';}, 500)
});
let allGood = true;
let textmessage = [];
const mainInput = document.querySelectorAll('.main');
const password = document.getElementById('password');
const passwordRet = document.getElementById('passwordRet');
const button = document.querySelector('.continue-button');
const message = document.getElementById('message');
const checkbox = document.querySelector('.required-field-checkbox');
checkbox.addEventListener('click',()=>{checked();});
button.addEventListener('click',()=>{add()});

function add(){
    allGood = true;
    errorAnaliz();
    message.innerHTML= '';
    if(checkbox.checked){
        if(allGood)
        {
            textmessage.push('Успешно!');
            message.innerHTML+= `<p class='good-message'>${textmessage[0]}</p>`;
        }
        else
        {
            for(elem of textmessage)
            {
                message.innerHTML+= `<p class='error-message'>${elem}</p>`;
            }
        }
    }
}
function checked(){
    if(checkbox.checked)
    {
        button.className+= ' ' + 'go-button';
    }
    else
    {
        button.className= 'continue-button';
    }
}
function errorAnaliz(){
    textmessage = [];
    message.innerHTML= '';
    for(elem of mainInput)
    {
        if(elem.value == null || elem.value == '' || elem.value == undefined)
        {
            allGood = false;
            textmessage.push('Не все обязательные поля заполнены.');
        }
        if(!allGood)
        {
            break;
        }
    }
    if(password.value != passwordRet.value)
    {
        allGood = false;
        textmessage.push("Пароли не совпадают.");
    }
}