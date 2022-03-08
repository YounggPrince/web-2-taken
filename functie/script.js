var Artist1 = {name: "Youngboy" , sterkpunt: "sterke en veel flows" , catagorie: "hiphop"};
var Artist2 = {name: "Gunna" , sterkpunt: "melodie" , catagorie: "hiphop/rb"};
var Artist3 = {name: "Kflock" , sterkpunt: "snel rappen", catagorie: "hiphop"};
var lijstArtist = [Artist1, Artist2, Artist3 ];

  console.log(lijstArtist.length);

for (let i = 0; i <lijstArtist.length; i++) {
    Artistprinten(lijstArtist[i]);
}
function Artistprinten (parameter){
console.log(parameter.name + ' ' + parameter.sterkpunt + ' ' + parameter.catagorie)
}





  



  