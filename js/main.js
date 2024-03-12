var mailInput1=document.getElementById('mailInput1');
var passInput1=document.getElementById('passInput1');
var LoginBtn=document.getElementById('LoginBtn');
var inputsAlert1=document.getElementById('inputsAlert1');
var inputsAlert2=document.getElementById('inputsAlert2');

var users=[];

if(JSON.parse(localStorage.getItem('users'))!=null)
{
    users=JSON.parse(localStorage.getItem('users'));
}

LoginBtn.addEventListener('click',function()
{
    fillAlert();
    existLogin();
})

function fillAlert()
{
    if(mailInput1.value==' ' && passInput1.value==' ')
    {
        inputsAlert1.classList.remove('d-none');
    }
}
function existLogin()
{
    for(var i=0 ; i<users.length ; i++)
    {
        if(users[i].email==mailInput1.value && users[i].pass==passInput1.value)
        {
            inputsAlert2.classList.add('d-none');
            LoginBtn.href = 'home.html';
            currentName = users[i].name;
            localStorage.setItem('home',JSON.stringify(currentName));

        }
        else if(mailInput1.value == '' && passInput1.value == '')
        {
            inputsAlert2.classList.add('d-none');
            inputsAlert1.classList.remove('d-none');
        }
        else{
            inputsAlert2.classList.remove('d-none');
        }
    }
}
