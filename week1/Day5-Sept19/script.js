
function add() {
  var num = document .getElementById('counter').innerHTML;
  var counter = Number(num) + 1;
  document .getElementById('counter').innerHTML = counter;
 
}

function reset(){
  document.getElementById('counter').innerHTML = "0";
}