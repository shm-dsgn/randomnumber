function myFunction() {
  var min = parseInt(document.getElementById('min').value);
  var max = parseInt(document.getElementById('max').value);
  if(max==min) {
    document.getElementById("result").innerHTML = "Both can't be same.";
  }
  else if(max>min) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = x;
  } 
  else {
    document.getElementById("result").innerHTML = "Max can't be less than Min.";
  }
}
