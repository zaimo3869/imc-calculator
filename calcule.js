let poids = document.getElementById('poids');
let taille = document.getElementById('taille').value;

document.getElementById('calc').addEventListener("click", ()=>{
   localStorage.setItem("taille",document.getElementById('taille').value);
   localStorage.setItem("poids",document.getElementById('poids').value);
  let storagePoids= localStorage.getItem("poids");
  let storageTaille= localStorage.getItem("taille")*localStorage.getItem("taille");
  
  let result = storagePoids/storageTaille;
  localStorage.setItem("resultat",result);
console.log(result)
})
document.getElementById('res').innerText+= " "+localStorage.getItem("resultat")