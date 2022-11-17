
// // taking input
// var username=prompt("whats ur name");

// // processing
// var welcomeMessage="this is working "+username;

// // output
// alert(welcomeMessage);


var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

// add event listner



function clickEventHandler(){
    console.log("clicked");
    outputDiv.innerText="translated "+txtInput.value;
};
btnTranslate.addEventListener("click",clickEventHandler);


// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("clicked");
//     console.log(txtInput.value);
// }) 