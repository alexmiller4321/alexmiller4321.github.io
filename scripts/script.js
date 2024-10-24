/* 
Name: Alex Miller 
File Name: script.js
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("header-name"); 

    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none"; 
        logo.style.display = "block";
    } 
    else{
        menu.style.display = "block"; 
        logo.style.display = "none";
    }
}