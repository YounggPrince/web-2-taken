'use strict';

 console.log("Prince oefening werkt");

 let h1Element = document.querySelector('.h1');
 console.log(h1Element);

 h1Element.style.backgroundColor = 'red';


 let PrinceElement = document.querySelector('#Prince');// this is identical
 console.log(PrinceElement);
 PrinceElement.style.backgroundColor = 'red';

 document.getElementById("Prince").style.textDecoration = "underline"



