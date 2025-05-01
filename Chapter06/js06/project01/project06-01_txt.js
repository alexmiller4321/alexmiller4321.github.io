"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Alex Miller
      Date:   5/1/25

      Filename: project06-01.js
*/
var submitButton = document.getElementById("submitButton"); 
var pwd = document.getElementById("pwd"); 
var pwd2 = document.getElementById("pwd2"); 

submitButton.addEventListener("click", function(){
      if(pwd.validity.patternMismatch){
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      }
      else if(pwd.value !== pwd2.value){
            pwd.setCustomValidity("Your passwords must match");
      }
      else{
            pwd.setCustomValidity("");
      }
}
);
