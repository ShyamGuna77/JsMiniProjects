//wRITE A  fn that reverse a number

function reverse(x){
//   x = x+"";// concating with string becomes a string
//   return x.split("").reverse().join("");  
console.log("hiiii");
}
console.log(reverse(32458));

// node Practise.js


// Write a  fn wheathe a passed string is Palindrome


function Palindrome(val){
    let num = val.toString();

    
    let reversed =  num.split("").reverse().join("");
    if(num===reversed){
        return true;
    }else {
        return false;
    }

}

// console.log(Palindrome("shyam"));
// console.log(Palindrome("MOM"));
// console.log(Palindrome("madam"));

//Wrie a  js fn to generate all combinations of ath string;
//Eg  dog  --> ==  d, do,dog , o , og ,g


// function comb (inp){

// }


function isVAlid(password,username){
    if(password.length<8){
    return false;
    }
    if(password.indexOf(' ')!==-1){
        return false;
    }
    if(password.indexOf(username)!==-1){
        return false 
    }
    return true;
}

// console.log(isVAlid("shyam 235","12344567"));
// console.log(isVAlid("shya235","12344567"));
// console.log(isVAlid("shyam","shyam123"));
// console.log(isVAlid("sh","1234"));
// console.log(isVAlid("s  ","s  "));
// console.log(isVAlid("shyam12345","harkiratharli"));


 

function rage (){
    // console.log("I hate everything");

}
console.log(rage());


function multiply(action, num){
    for(let i = 0; i<num;i++){
        action();

    }

}

// console.log(multiply(reverse,13));
function night(numm){
    return function(x){
        return x*numm;
    }
}

const triple = night(3);

const fourth = night(4);
const fifth = night(5);
console.log(triple(6));
console.log(fourth(674));
console.log(fifth(45));