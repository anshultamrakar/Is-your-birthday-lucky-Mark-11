const dateOfBirthday = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");



function compareValue(sum , luckyNumber ){
    if(sum % luckyNumber === 0){
        outputBox.innerText= "Your number is a lucky Number 😃"
    }else{
        outputBox.innerText = "Your number is not a lucky Number 😔"
    }
}



function checkLuckyNumber(){
    const dob = dateOfBirthday.value ;
    const sum = calculateSum(dob);

    compareValue(sum ,luckyNumber.value )
}


function calculateSum(dob){
     dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i = 0 ; i < dob.length ; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum ; 
    
}





checkNumber.addEventListener('click', checkLuckyNumber);

