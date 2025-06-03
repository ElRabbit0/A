const requiredField = document.querySelectorAll('.required-field');
const checkbox = document.querySelector('.required-field-checkbox');
const reg = document.querySelector('.reg-button');
const message = document.getElementById('message');
const password = document.getElementById('password');
const passwordRet = document.getElementById('passwordRet');
let textmessage = [];
let allGood = true;

checkbox.addEventListener('click', ()=>{checked()});
reg.addEventListener('click', ()=>{register();});

function checked(){
    if(checkbox.checked)
    {
        reg.className+= ' ' + 'go-button';
    }
    else
    {
        reg.className= 'reg-button';
    }
}
function register(){
    allGood = true;
    errorAnaliz();
    message.innerHTML= '';
    if(allGood)
    {
        textmessage.push('Успешно!');
        message.innerHTML+= `<p class='good'>${textmessage[0]}</p>`;
        setTimeout(()=>{location.href='../index.html'}, 2000)
    }
    else
    {
        for(elem of textmessage)
        {
            message.innerHTML+= `<p class='error'>${elem}</p>`;
        }
    }
}
function errorAnaliz(){
    textmessage = [];
    message.innerHTML= '';
    for(elem of requiredField)
    {
        if(elem.value == null || elem.value == '' || elem.value == undefined)
        {
            allGood = false;
            textmessage.push('Обязательные поля заполнены неправильно.');
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
