var answers = [1,0, 0,2]
var round = 0
var roundWin = 3
var selectedAnswer = -1
var images = [["images/banana peel.jpeg", "images/water-bottle.jpeg", "images/clothing.png"],["images/cardboard.png", "images/bag.jpg", "images/spoon.jpg"], ["images/glass.png", "images/food.png","images/electronics.png"],["images/towel.jpg","images/styrofoam.jpg", "images/can.jpg" ]]

var id = [["banana", "waterbottle", "clothing"], ["cardboard", "plastic shopping bags", "plastic utensils"],["glass", "food", "electronics"],["towel","styrofoam", "can"]]

var boxid = ["box-green", "box-red", "box-yellow"]

function init(){
  
  var table = document.getElementById("table");


  var row = document.createElement('div');
  row.class = "row justify-content-md-center";
  

  var greenContainer = document.createElement('div');
  greenContainer.class = "col-md-auto text-center";
  greenContainer.onclick = "clickBox(0)";
  greenContainer.id = "green-container";

  var boxGreen = document.createElement('div');
  boxGreen.class = "box-green";
  boxGreen.id = "box-green";

  var greenText = document.createElement('div');
  greenText.id = "green-text";

  
  boxGreen.appendChild(greenText);
  greenContainer.appendChild(boxGreen);
  row.appendChild(greenContainer);
  table.appendChild(row);
}

function clickBox(index){
  console.log(index)
  if(selectedAnswer >= 0)
    document.getElementById(boxid[selectedAnswer]).classList.remove("selected");
  selectedAnswer = index;
  document.getElementById(boxid[selectedAnswer]).classList.add("selected");



  /*
  if(round == roundWin){
    var table = document.getElementById('table');
    deleteTable()
    var win = document.createElement('img');
    win.src = "images/win.jpg";
    win.height = 500;
    table.appendChild(win);
  }
  else if(answers[round] == index){
    round++;
    document.getElementById('green-image').src = images[round][0]
    document.getElementById('red-image').src = images[round][1]
    document.getElementById('yellow-image').src = images[round][2]
    document.getElementById('green-text').innerHTML = id[round][0]
    document.getElementById('red-text').innerHTML = id[round][1]
    document.getElementById('yellow-text').innerHTML = id[round][2]

  } else{
    var table = document.getElementById('table');
    deleteTable()
    var wrong = document.createElement('img');
    wrong.src = "images/wrong.jpg"
    table.appendChild(wrong);
  }
  
*/


}

function submitButton(){
  if(round == roundWin){
    var table = document.getElementById('table');
    deleteTable()
    var win = document.createElement('img');
    win.src = "images/win.jpg";
    win.height = 500;
    table.appendChild(win);
    document.getElementById("answer").innerHTML = "4 of 4"
  }
  else if(answers[round] == selectedAnswer){
    document.getElementById(boxid[selectedAnswer]).classList.remove("selected");
    round++;
    document.getElementById('green-image').src = images[round][0]
    document.getElementById('red-image').src = images[round][1]
    document.getElementById('yellow-image').src = images[round][2]
    document.getElementById('green-text').innerHTML = id[round][0]
    document.getElementById('red-text').innerHTML = id[round][1]
    document.getElementById('yellow-text').innerHTML = id[round][2]

    document.getElementById("correct").style.visibility = "visible";
    document.getElementById("answer").innerHTML = round + " of 4";





  } else{
    var table = document.getElementById('table');
    deleteTable()
    var wrong = document.createElement('img');
    wrong.src = "images/tryagain.png"
    table.appendChild(wrong);
    document.getElementById("correct").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";


  }
  
}

function deleteTable(){
  var table = document.getElementById('table');
  while(table.childNodes.length > 0){
    table.removeChild(table.childNodes[0])
  }
}

window.onload = function(){
  init();
};

function validatelogin(){
  console.log("Logging in");
  var form = document.forms["login"];
  var username = form["username"].value
  var password = form["password"].value
  
  const http = new XMLHttpRequest();
  const url = "http://localhost:8000/login";
  http.open ("GET", url);
  var request = {
	  username: username,
	  password: password
  }
  http.send(request);
  http.onreadystatechange = function(){
	  if (this.readyState == 4 && this.status == 200){
		  console.log('hello');
	  }
	  
  }
  return false;
}