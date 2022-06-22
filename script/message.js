(function(){

    function creeElement(){
        let elmCode__adresse = document.querySelector('.code__adresse');
    
        let html = `
        <div class=boite__modale>
        <bouton class=boite__x>X</bouton>
            <div class=code__adresse>
            ${elmCode__adresse.textContent}
            </div>
        </div>
        `;
    let elmBody = document.querySelector("body");
    elmBody.insertAdjacentHTML('afterbegin', html);
    }

    creeElement();

    let elmBoite__modale = document.querySelector('.boite__modale');
    let elmOK = document.querySelector('#mon_bouton');
    elmBoite__x = document.querySelector('.boite__x');

    elmOK.addEventListener('mousedown',  function(){
        elmBoite__modale.classList.add("boite__modale__ouvrir")
    })

    elmBoite__x.addEventListener('mousedown',  function(){
        elmBoite__modale.classList.remove("boite__modale__ouvrir")
    })
})()