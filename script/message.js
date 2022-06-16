(function(){

    let elmBoite__modale, elmBoite__x;

    function creer_boite_modale(){
    elmBoite__modale = document.createElement("div");    
    elmBoite__modale.classList.add("boite__modale");

    elmBoite__x = document.createElement("button");
    elmBoite__x.textContent = "X";
    elmBoite__x.classList.add("boite__x")

    elmBoite__modale.appendChild(elmBoite__x)
    let elmBody = document.querySelector("body");
    elmBody.appendChild(elmBoite__modale);
    }
    creer_boite_modale();

    let elmOK = document.querySelector('#mon_bouton');
    elmOK.addEventListener('mousedown',  function(){
        elmBoite__modale.classList.add("boite__modale__ouvrir")
    })

    elmBoite__x.addEventListener('mousedown',  function(){
        elmBoite__modale.classList.remove("boite__modale__ouvrir")
    })
})()