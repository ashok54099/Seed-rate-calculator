function f1(){
    var Area = document.getElementById("Area").value;

var Rowspacing = document.getElementById("Rowspacing").value;

var Plantspacing = document.getElementById("Plantspacing").value;


var Seedsperhill = document.getElementById("Seedsperhill").value;

var Testweight = document.getElementById("Testweight").value;

var Germinationpercentage = document.getElementById("Germinationpercentage").value;


var Seedrate = (Area*Seedsperhill*Testweight)/(Rowspacing*Plantspacing*Germinationpercentage);

document.getElementById("Seedrate").innerHTML =
        "Seedrate =" + Seedrate;
  }
