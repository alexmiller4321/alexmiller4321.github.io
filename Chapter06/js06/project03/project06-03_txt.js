"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Alex Miller
      Date:   5/1/25

      Filename: project06-03.js
*/
var useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling(){
      if(useShip.checked){
            document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
            document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
            document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
            document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
            document.getElementById("cityBill").value = document.getElementById("cityShip").value;
            document.getElementById("countryBill").value = document.getElementById("countryShip").value;
            document.getElementById("codeBill").value = document.getElementById("codeShip").value;

            document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;

      }
}      

var formElements = document.querySelectorAll('input[type="text"]');
var fieldCount = formElements.length;
var errorBox = document.getElementById("errorBox");

for(var i = 0; i<formElements.length; i++){
      formElements[i].addEventListener("invalid", showValidationError);
}
function showValidationError(evt){
      evt.preventDefault();
      errorBox.textContent = "Complete all highlighted fields";
}
