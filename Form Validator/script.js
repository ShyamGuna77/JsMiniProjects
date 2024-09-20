'use strict'
const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');




//Show Error Message
function showError(input,message){
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show Success Output

function showSucess(input){
    const formControl = input.parentElement;
    formControl.classList.add('sucess');
}

//Check Email is valid
function isValidEmail(email){
   
//    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(String(email).toLowerCase());
}
// check Required UserName 
 function checkRequired(inputArr){
inputArr.forEach(element => {
   if(element.value.trim()===''){
    showError(element,`${getField(element)} is Required`)
   }else{
    showSucess(element)
   }
});
 }

 //GET FIELD of the first letter capitial

 function getField(element){
    return element.id.charAt(0).toUpperCase()+element.id.slice(1);
 }


 //check Input Length

 function checkLength(input,min ,max){
    if(input.value.length<min){
        showError(input,`${getField(input)}  must be atleast ${min} characters`)
    }else if(input.value.length>max){
        showError(input,`${getField(input)}must be atleast ${max} characters`)
    }else{
        showSucess(input);
    }
 }

 //check passwords match 

 function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
       showError(input2,"Passwords Does not match") 
    }
 }






//Event Listners
form.addEventListener('submit',function(e){ 
e.preventDefault();

 checkRequired([username,email,Password,Password2]);
 checkLength(username,3,16);
 checkLength(Password,6,26);
 checkPasswordsMatch(Password,Password2)
 
})
