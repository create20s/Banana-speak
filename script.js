var textInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var outputTxt=document.querySelector("#output");
console.log(textInput);

function clickEventHandler(){
   console.log("clicked");
outputTxt.innerText="translated "+ textInput.value;

}
btnTranslate.addEventListener("click",clickEventHandler);



// btnTranslate.addEventListener("click", function clickEventHandler(){
//  console.log("clicked");
// })