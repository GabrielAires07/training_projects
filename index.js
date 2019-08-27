var btnElement = document.createElement("button");
btnElement.style.float = "";
var nameButton = document.createTextNode("Vermelho");
btnElement.appendChild(nameButton);

btnElement.style.marginRight = '38px';


var squaresElement = document.getElementById('square1');
squaresElement.appendChild(btnElement);

squaresElement.style.width = "100px";
squaresElement.style.float = "left";
squaresElement.style.marginRight = "10px";

var locButton = document.getElementById('head');
locButton.appendChild(btnElement);

btnElement.onclick = function () {

  var square = document.createElement('div');
    
  square.style.width = '100px';
  square.style.height = '100px';
  square.style.backgroundColor = '#F00';
  square.style.marginBottom = "10px";
  
  
  
  squaresElement.appendChild(square);
};

var btnElement2 = document.createElement("button");
btnElement2.style.float = "";
var nameButton2 = document.createTextNode("Azul");
btnElement2.appendChild(nameButton2);

var squaresElement2 = document.getElementById('square2');
squaresElement2.appendChild(btnElement2);

squaresElement2.style.width = "100px";
squaresElement2.style.float = "left";



var locButton2 = document.getElementById('head');
locButton2.appendChild(btnElement2);

btnElement2.onclick = function () {

  var square2 = document.createElement('div');
   
  square2.style.width = '100px';
  square2.style.height = '100px';
  square2.style.backgroundColor = '#0000FF';
  square2.style.marginBottom = "10px";
  
  
  squaresElement2.appendChild(square2);
};