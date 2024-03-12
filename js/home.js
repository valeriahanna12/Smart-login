var welcomeSyntax=document.getElementById('welcomeSyntax');
user = JSON.parse(localStorage.getItem('home'));
welcomeSyntax.innerHTML=`Welcome ${user}`;