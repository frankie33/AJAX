/*function loadDoc(){
  
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        document.getElementById("example").innerHTML = this.responseText;
    }
  };
 xhttp.open("GET", "info.txt", true);
 xhttp.send();

}*/


/*CALL BACK FUNCTION*/

/*function loadDoc(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  document.getElementById("example").innerHTML = xhttp.responseText;
}*/


/*USING JQUERY WITH AJAX*/

$(document).ready(function() {
  $("#driver").click(function(event) {
    $("#stage").load("info.html");
  });
});

