 
 
 let form = document.querySelector('form');
 let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
   let email = document.getElementById('email');
    let password = document.getElementById('password');
    let btn = document.getElementById('btn');

//   ----------------------------------------------------------------
    let firstNameError = document.getElementById('first-name-error');
    let lastNameError = document.getElementById('last-name-error');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');






    form.addEventListener('submit', function(e){
        e.preventDefault();
        // Handle form submission logic here
    
     if(firstName.value.trim()===""){
        firstName.style.borderColor = "hsl(0, 100%, 74%) "
        firstNameError.style.display = "block";
     }else{
        firstName.style.borderColor = " hsl(154, 59%, 51%)"
        firstNameError.style.display = "none";
     }

     
     if(lastName.value.trim()===""){
        lastName.style.borderColor = "hsl(0, 100%, 74%) "
        lastNameError.style.display = "block";
     }else{
        lastName.style.borderColor = " hsl(154, 59%, 51%)"
        lastNameError.style.display = "none";
     }

     
     if(email.value.trim()==="" || !email.value.includes("@") || !email.value.includes(".")){
        email.style.borderColor = "hsl(0, 100%, 74%) "
        emailError.style.display = "block";
     }else{
        email.style.borderColor = " hsl(154, 59%, 51%)"
        emailError.style.display = 'none';
     }

     
     if(password.value.trim()===""){
        password.style.borderColor = "hsl(0, 100%, 74%) "
        passwordError.style.display = "block";
     }else{
        password.style.borderColor = " hsl(154, 59%, 51%)"
        passwordError.style.display = "none";
     }
     
    })

    

