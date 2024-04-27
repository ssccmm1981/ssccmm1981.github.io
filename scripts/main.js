//var myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World";

let myVariable;

myVariable = "Clark";

/*let iceCream = "coca";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}*/

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}

var result = multiply(3,6);

/*if(result === 10){
    alert("multiply result = " + result );
}else{
    alert("multiply result = " + result)
}*/

//document.querySelector("html").onclick = function(){
    alert("Hello World!!")
//};

var myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox.jpg"){
        myImage.setAttribute("src","images/firefox1.jpg");
    }else{
        myImage.setAttribute("src","images/firefox.jpg");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.innerHTML = "Mozilla is cool! " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storeName = localStorage.getItem("name");
    myHeading.innerHTML = "Firefox is cool! " + storeName;
}

myButton.onclick = function(){
    setUserName();
};