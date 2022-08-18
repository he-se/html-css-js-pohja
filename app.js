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








  
// lottonumerot
let lottoNumerot = [3,7,8,12,15,19,22];
console.log(lottoNumerot);
let rivi = document.createElement("p");
rivi.textContent = lottoNumerot[0];
let lottoRivi = document.getElementById("lotto");
lottoRivi.appendChild(rivi);


