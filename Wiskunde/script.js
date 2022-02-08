//alert gaat een popup tonen met een bericht
//hier is het bericht de som vanhet geval 12 + 13

let getal1 = prompt('geef het eerste getal');
let getal2 = prompt('geef het tweede getal');
let som = (getal1*1) + (getal2*1); // de som van de getallen hierboven
alert (som);

let isGetal1kleinerDangetal12 = getal1 < getal2;

if(isGetal1kleinerDangetal12) {

    aler('getal 1 is kleiner dan getal 2');
} else{
    // dit voeren we uit indien fout
    alert('Getal 1 is kleiner dan getal 2');
}
 