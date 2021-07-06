function myFunction() {
  var min = document.getElementById('min').value;
  var max = document.getElementById('max').value;
  var x = Math.floor((Math.random() * (max - min + 1)) + min);
  document.getElementById("demo").innerHTML = x;
}