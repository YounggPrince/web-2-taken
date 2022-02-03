'use strict';

 console.log("Prince oefening werkt");

 let h1Element = document.querySelector('.h1');
 console.log(h1Element);

 h1Element.style.backgroundColor = 'red';
document.getElementById("Prince").style.textDecoration = "underline"

 



 let klasseNaam = 'derde-rij';
 let rij = document.getElementsByClassName(klasseNaam)

 console.log(rij);

 

for (let element of rij){ 
    console.log (element)

    element.style.backgroundColor = "red";
}

 



 



