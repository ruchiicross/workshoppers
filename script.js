"use strict"

    //VARIABLES
let ussdCode,
    airtime,
    data,
    balance;

function ussd(ussdkey){
    console.log("Enter")
    switch(ussdkey) {
        case "1":
            document.querySelector("#dom-stdout1").innerText = '1. N100';
            document.querySelector("#dom-stdout2").innerText = '2 N100';
            document.querySelector("#dom-stdout3").innerText = '3. N100';
        break;
        case "2":
            console.log("1. 200MB");
            console.log("2. 300MB");
            console.log("3. 400MB");
        break;
        case "3":
            console.log("your balance is N0.00");
        break;

        default:
            console.log("Invalid Option")
        break;
    }
}
    //Conditional if
(function(){
   document.querySelector("#btn-click").addEventListener('click', function(){
    ussdCode = document.querySelector("#ussdCode").value; 

    if(ussdCode == "*141#"){
        document.querySelector("#dom-stdout1").innerText = `please select 1-3`;
        document.querySelector("#dom-stdout2").innerText = `1. Borrow Airtime`;
        document.querySelector("#dom-stdout3").innerText = `2. Borrow Data`;
        document.querySelector("#dom-stdout4").innerText = `3. Check Balance`;
        document.querySelector("#btn-send").addEventListener('click', function(){
          let  ussdkey = document.querySelector("#ussdkey").value;  
            ussd(ussdkey);
            
        })
        // dissrc(ussd)
    }else{
    console.log("FAIED")
    }

   });    
        
})();  