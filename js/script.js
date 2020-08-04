// chiedera utente numero km che vuole percorrere ed età passegero

var kmUtente;
var etàUtente;
kmUtente = prompt ("quanti chilometri vorresti percorrere?");
etàUtente = prompt ("quanti anni hai?");

// prezzo tratta in base ai km

var prezzoBiglietto
prezzoBiglietto = kmUtente * 0.21;

// sconto 20%minorenni 40% over 65

if (etàUtente < 18) {
  (prezzoBiglietto - prezzoBiglietto  * 20 / 100);
} else if (etàUtente > 65){
  (prezzoBiglietto - prezzoBiglietto * 40 / 100);
} else {
  (prezzoBiglietto);
}

document.getElementById('prezzo_bigl').innerHTML = prezzoBiglietto;
document.getElementById('ut_u18').innerHTML = (prezzoBiglietto * 20 / 100);
document.getElementById('ut_o65').innerHTML = (prezzoBiglietto * 40 / 100);
