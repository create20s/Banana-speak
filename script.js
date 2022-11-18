var textInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var outputTxt=document.querySelector("#output");
// console.log(textInput);

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


var serverURL="https://api.funtranslations.com/translate/german-accent.json"


function getTranslationURL(text) {
   return serverURL+ "?"+ "text" +text
   
}

function errorHandler(error) {
   console.log("error occured", error)
   alert("something wrong with server try aggain leter")
   
}

function clickEventHandler(){
//    console.log("clicked");
// outputTxt.innerText="translated "+ textInput.value;

 var inputText= textInput.value; // taking input

 // calling server for processing

 fetch(getTranslationURL(inputText))
 .then(response => response.json())
 .then(json => {

   var translatedText= json.contents.translated;
   outputTxt.innerText= translatedText;
   })
 .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickEventHandler);



// btnTranslate.addEventListener("click", function clickEventHandler(){
//  console.log("clicked");
// })