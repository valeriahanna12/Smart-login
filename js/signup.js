var mailInput=document.getElementById('mailInput');
var passInput=document.getElementById('passInput');
var nameInput=document.getElementById('nameInput');
var signUpBtn=document.getElementById('signUpBtn');
var successBtn=document.getElementById('successBtn');
var inputsAlert=document.getElementById('inputsAlert');
var inputAlert1=document.getElementById('inputAlert1');
var inputAlert2=document.getElementById('inputAlert2');
var inputAlert3=document.getElementById('inputAlert3');
var inputAlertSuccess=document.getElementById('inputAlertSuccess');
var inputAlertFailed=document.getElementById('inputAlertFailed');
var inputs=document.getElementsByClassName('form-control');
var users=[];

if(JSON.parse(localStorage.getItem('users'))!=null)
{
    users=JSON.parse(localStorage.getItem('users'));
}

signUpBtn.addEventListener('click',function()
{
    rejexForEmail();
    rejexForName();
    rejexForPass();
    if(emailValidation())
    {
        inputAlertFailed.classList.remove('d-none');
        inputsAlert.classList.remove('d-none');
        inputAlert2.classList.add('is-invalid');
        inputAlertSuccess.classList.add('d-none');
        successBtn.classList.add('d-none');
        nameInput.classList.remove('is-valid');
        mailInput.classList.remove('is-valid');
        passInput.classList.remove('is-valid');
    }
    else if(addUser())
    {
        inputAlertSuccess.classList.remove('d-none');
        inputAlertFailed.classList.add('d-none');
        successBtn.classList.remove('d-none');   
        inputsAlert.classList.add('d-none');
    } 
})

function addUser()
{
    var user=
    {
        name:nameInput.value,
        email:mailInput.value,
        pass:passInput.value,
    }
    if(rejexName.test(nameInput.value) && rejexEmail.test(mailInput.value) && rejexPass.test(passInput.value))
    {
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        return true;
    }
}

function emailValidation()
{
    for(var i = 0 ; i < users.length ; i++)
    {
        existEmail = users[i].email;

        if(existEmail == mailInput.value )
        {
            return true;

        }
    }
    return false;
}

var rejexName=/^[A-Z][a-z( )*]{2,15}$/
var rejexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
var rejexPass=/^.{5,15}$/

function rejexForName()
{
    if(rejexName.test(nameInput.value))
    {
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        inputAlert1.classList.add('d-none');
    }
    else
    {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        inputAlert1.classList.remove('d-none');   
        inputsAlert.classList.remove('d-none');
    }
}
function rejexForEmail()
{
    if(rejexEmail.test(mailInput.value))
    {
        mailInput.classList.add('is-valid');
        mailInput.classList.remove('is-invalid');
        inputAlert2.classList.add('d-none');
    }
    else
    {
        mailInput.classList.add('is-invalid');
        mailInput.classList.remove('is-valid');
        inputAlert2.classList.remove('d-none');
        inputsAlert.classList.remove('d-none');

    }
}
function rejexForPass()
{
    if(rejexPass.test(passInput.value))
    {
        passInput.classList.add('is-valid');
        passInput.classList.remove('is-invalid');
        inputAlert3.classList.add('d-none');
    }
    else
    {
        passInput.classList.add('is-invalid');
        passInput.classList.remove('is-valid');
        inputAlert3.classList.remove('d-none');
        inputsAlert.classList.remove('d-none');
    }
}