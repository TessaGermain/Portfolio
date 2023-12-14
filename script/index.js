function animation(id, posTop, posLeft){
    let element = document.getElementById(id);
    element.animate([
        {
            top: '70%',
            left: '0%',
            opacity: '0'   
        },
        {
            top: posTop,
            left: posLeft,
            opacity: 1
        }
    ],{
        duration: 1000,
        delay: 1000,
    });
    setTimeout(()=>{
        element.style.top = posTop;
        element.style.left = posLeft;
        element.style.opacity = 1;
    }, 2000);
}
animation("html", "30%", "5%");
animation('css', '58%', '75%');
animation('php', "65%", "10%");
animation('sql', "0%", "55%");
animation('ps', '42%', "50%");
animation('indesign', '0%', '80%');
animation('illustrator', '-8%', '8%');
animation('xd', '25%', '70%');
animation('js', '72%', '34%');
animation('wp', '22%', '19%');

function verif(){
    console.log(window.pageYOffset);
    console.log(document.getElementById('competence').offsetY);
}

function popUp(e){
    if(e.srcElement.classList.contains('but') || e.srcElement.parentElement.classList.contains('but')){
        document.getElementById('body').innerHTML += `
        <div id="pop-up">
            <div id="contenu-pop-up">
                <div id="croix" onclick="fermeture()">X</div>
                <h2>BUT Métiers du Multimédia et de l'Internet</h2>
                <h3>IUT de Meaux - Université Gustave Eiffel</h3>
                <h3>Septembre 2021 - Actuellement</h3>
                <ul>
                    <li>Participation à la Nuit de l'Info 2021</li>
                    <li>Création de site web en groupe</li>
                </ul>
            </div>
        </div>
        `;
    }
    else if(e.srcElement.classList.contains('lutc') || e.srcElement.parentElement.classList.contains('lutc')){
        document.getElementById('body').innerHTML += `
        <div id="pop-up">
            <div id="contenu-pop-up">
                <div id="croix" onclick="fermeture()">X</div>
                <h2>Stage en tant que webmaster</h2>
                <h3>Level Up Tech Consulting</h3>
                <h3>Juin-Juillet 2022</h3>
                <ul>
                    <li>Maintenance de plusieurs sites Wordpress</li>
                    <li>Utilisation des plug-in Divi, SendinBlue, Locotranslate, Yoast, H5P, WisdmLabs</li>
                    <li>Utilisation de Notion et Slack</li>
                    <li>Création d'un schéma narratif de newsletter</li>
                    <li>Mise en page de plusieurs pages avec Divi</li>
                </ul>
            </div>
        </div>
        `;
    }
    else if(e.srcElement.classList.contains('bac') || e.srcElement.parentElement.classList.contains('bac')){
        document.getElementById('body').innerHTML += `
        <div id="pop-up">
            <div id="contenu-pop-up">
                <div id="croix" onclick="fermeture()">X</div>
                <h2>Bac Général - Mention très bien</h2>
                <h3>Lycée Bossuet - Meaux (77100)</h3>
                <h3>2018 - 2021</h3>
                <ul>
                    <li>Spécialités de Terminale : Mathématiques, Physique-Chimie</li>
                    <li>Spécialités de Première : Mathématiques, Physique-Chimie, Littérature & Philosophie</li>
                    <li>Option de Terminale : Mathématiques Expertes</li>
                </ul>
            </div>
        </div>
        `;       
    }
    else{
        console.log('non');
    }
}
function fermeture(){
   let popUp = document.getElementById('pop-up');
   popUp.parentNode.removeChild(popUp);
}