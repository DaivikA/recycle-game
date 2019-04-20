var answers = [1,0, 0]
var round = 0
var roundWin = 2
var selectedAnswer = -1
var images = [["images/banana peel.jpeg", "images/water-bottle.jpeg", "images/clothing.png"],["images/cardboard.png", "images/bag.jpg", "images/spoon.jpg"], ["images/glass.png", "images/food.png","images/electronics.png"]]

var id = [["banana", "waterbottle", "clothing"], ["cardboard", "plastic shopping bags", "plastic utensils"],["glass", "food", "electronics"]]

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
    document.getElementById("answer").innerHTML = "3 of 3"
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
    document.getElementById("answer").innerHTML = round + " of 3";
  } else{
    var table = document.getElementById('table');
    deleteTable()
    var wrong = document.createElement('img');
    wrong.src = "images/wrong.jpg"
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
