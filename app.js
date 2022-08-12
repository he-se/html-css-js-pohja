// tulostus termimaaliin
let a = 12;
console.log(a);
let tulos = a*a;
console.log("Tulos on: " + tulos);

// funktio hakee luvun html-sivulta ja kirjoittaa tuloksen html-sivulle
function omaFunktio() {
    let x = document.getElementById("luku").value;
    document.getElementById("tulos").innerHTML = x * x;
  }

