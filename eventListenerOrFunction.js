//Get button ID here

const greenBtn = document.getElementById('get-green-btn');
const redBtn = document.getElementById('red-green-btn');
const blueBtn = document.getElementById('blue-green-btn');

//One type of function even
greenBtn.onClick=setGreenColor;

function setGreenColor(){
	console.log("Hi i am from green Color");
}

//Anonymus function 
redBtn.onClick= function() {
	console.log("Hi i am from red Color");
}
// add event listener
blueBtn.addEventListener('click',setBlueColor);

function setBlueColor(){
	console.log("Hi i am from blue Color");
}

blueBtn.addEventListener('click',function(){
	console.log("Hi i am from blue Color second system");
});