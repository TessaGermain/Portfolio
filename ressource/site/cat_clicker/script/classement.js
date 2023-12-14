// FONCTIONS UTILITAIRES
function affichageSimplifie(donnee, arrondi){
    if(donnee/1000000000000000000>=1){
        donneeSimplifie = donnee/1000000000000000000;
        return donneeSimplifie.toFixed(arrondi)+'T';      
    }   
    else if(donnee/1000000000000>=1){
        donneeSimplifie = donnee/1000000000000;
        return donneeSimplifie.toFixed(arrondi)+'B';      
    }
    else if(donnee/1000000>=1){
        donneeSimplifie = donnee/1000000;
        return donneeSimplifie.toFixed(arrondi)+'M';
    }
    else if(donnee/1000>=1){
        donneeSimplifie = donnee/1000;
        return donneeSimplifie.toFixed(arrondi)+'K';
    }
    else{
        return donnee;
    }  
}
function affichagePseudo(pseudo){
    if(pseudo.length>15){
        pseudoSimplifie = pseudo.substring(0,14)+"...";
        return pseudoSimplifie;
    }
    else{
        return pseudo;
    }
}

function btnActif(){
    let btnClassement = document.getElementsByClassName("btn-classement");
    for(let btn of btnClassement){
        if(btn.classList.contains("actif")){
            document.querySelector(`#${btn.id} img`).src = "ressources/cadres/Planche.png";
            document.querySelector(`#${btn.id} h4`).classList.remove("texte-gris");
            document.querySelector(`#${btn.id} h4`).classList.add("couleur");
        }
        if(!btn.classList.contains("actif")){
            document.querySelector(`#${btn.id} img`).src = "ressources/cadres/planche_gris.png";
            document.querySelector(`#${btn.id} h4`).classList.add("texte-gris");
            document.querySelector(`#${btn.id} h4`).classList.remove("couleur");           
        }
    }
}
function score(e){
    let btnClassement = document.getElementsByClassName("btn-classement");
    for(let btn of btnClassement){
        if(btn.classList.contains("actif")){
            btn.classList.remove("actif");
        }
    }
    element = e.srcElement;
    id = e.srcElement.id;
    idTop = id.split("-")[1];
    while(id!= `div-${idTop}`){
        element = element.parentNode;
        id = element.id;
    }
    element.classList.add("actif");
    btnActif();
    requete();
}
//FONCTIONS AFFICHAGE
function affichageScoreAvant(){
    document.getElementById("podium").classList.add("none");
    document.getElementById("to_50").classList.remove("none");
    document.getElementById("colonne1").style.opacity = 0;
    document.getElementById("colonne2").style.opacity = 0;
    document.getElementById("classement").classList.remove("noScroll");
}
function affichageScoreApres(){
    document.getElementById("colonne1").style.opacity = 1;
    document.getElementById("colonne2").style.opacity = 1;
}
function affichagePodium(medaille, i){
    document.getElementById("colonne1").innerHTML += `
    <div class="un_score">
        <div class="nom">
            <img src="ressources/elements/medaille_${medaille}.png">
            <p class="pseudo">${affichagePseudo(reponse[i].username)}</p>
        </div>
        <div class="nombre">
            <p>${affichageSimplifie(reponse[i].score, 2)}</p>
            <img class="boubou" src="ressources/elements/cat.png">
        </div>
    </div>
    `;
}
function videColonne(){
    document.getElementById("colonne1").innerHTML = "";
    document.getElementById("colonne2").innerHTML = "";
}
function forAffichage(iMin, iMax, colonne){
    let pseudo = window.location.href.split("?")[1];
    pseudo = pseudo.split("=")[1];
    for(let i=iMin; i<iMax; i++){
        if(reponse[i]){
            document.getElementById(colonne).innerHTML += `
                <div class="un_score" id="score-${i}">
                    <div class="nom">
                        <p class="chiffre">${i+1}.</p>
                        <p class="pseudo">${affichagePseudo(reponse[i].username)}</p>
                    </div>
                    <div class="nombre">
                        <p>${affichageSimplifie(reponse[i].score, 2)}</p>
                        <img class="boubou" src="ressources/elements/cat.png">
                    </div>
                </div>        
            `;
            if(reponse[i].username == pseudo){
                document.getElementById(`score-${i}`).style.color = "#351500";
                document.getElementById(`score-${i}`).style.backgroundColor = "#FFF3D0";
            }
        }
    }
}
function enleverBtn(min, max){
    if(reponse.length < min){
        document.getElementById(`div-top${max}`).style.display = "none";
    }
}

// REQUETE
function requete(){
    httpRequest = new XMLHttpRequest();
    var largeur = window.innerWidth;
    if(largeur <= 576){
        httpRequest.onreadystatechange = traitementTel;
    }
    else{
        httpRequest.onreadystatechange = traitement;
    }
    httpRequest.open('GET', ' https://sae-301.azurewebsites.net/get-leaderboard.php', true);
    httpRequest.send();
}
function traitement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            reponse = JSON.parse(httpRequest.responseText);
            let btnClassement = document.getElementsByClassName("btn-classement");
            for(let btn of btnClassement){
                if(btn.classList.contains("actif")){
                    var idClassement = btn.id;
                }
            }
            switch(idClassement){
                case "div-top3":
                    document.getElementById("podium").classList.remove("none");
                    document.getElementById("to_50").classList.add("none");
                    document.getElementById("scores1").innerText = affichageSimplifie(reponse[0].score,2);
                    document.getElementById("pseudo1").innerText = affichagePseudo(reponse[0].username)
                    document.getElementById("scores2").innerText = affichageSimplifie(reponse[1].score,2);
                    document.getElementById("pseudo2").innerText = affichagePseudo(reponse[1].username)
                    document.getElementById("scores3").innerText = affichageSimplifie(reponse[2].score,2);
                    document.getElementById("pseudo3").innerText = affichagePseudo(reponse[2].username);
                    document.getElementById("classement").classList.add("noScroll");
                    break;
                case "div-top50":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        affichagePodium("1", 0);
                        affichagePodium("2", 1);
                        affichagePodium("3", 2);
                        forAffichage(3,25, "colonne1");
                        forAffichage(25,50,"colonne2");
                        affichageScoreApres();
                    },200);
                    break;
                case "div-top100":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        forAffichage(50,75,"colonne1");
                        forAffichage(75,100,"colonne2");
                    }, 200);
                    affichageScoreApres();
                    break;
                case "div-top150":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        forAffichage(100,125,"colonne1");
                        forAffichage(125,150,"colonne2");
                        affichageScoreApres();
                    },200);
                    break;  
                case "div-top200":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        forAffichage(150,175, "colonne1");
                        forAffichage(175,200, "colonne2");
                    },200);  
                    affichageScoreApres();  
                    break;  
                case "div-top250":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        forAffichage(200,225, "colonne1");
                        forAffichage(225,250, "colonne2");
                        affichageScoreApres();  
                    },200);  
                    break;  
                case "div-top300":
                    affichageScoreAvant();
                    setTimeout(()=>{
                        videColonne();
                        forAffichage(250,275, "colonne1");
                        forAffichage(275,300, "colonne2");
                        affichageScoreApres();  
                    },200);  
                    break;  
            }
            enleverBtn(251, 300);
            enleverBtn(201, 250);
            enleverBtn(151, 200);
            enleverBtn(101, 150);
            enleverBtn(51, 100);
        } 
        else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
}
function traitementTel(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            reponse = JSON.parse(httpRequest.responseText);
            document.getElementById("colonne1").innerHTML = "";
            document.getElementById("to_50").style.display = "flex";
            document.getElementById("to_50").classList.remove("none");
            document.getElementById("colonne1").style.opacity = 1;
            document.getElementById("classement").classList.remove("noScroll");
            affichagePodium("1", 0);
            affichagePodium("2", 1);
            affichagePodium("3", 2);
            forAffichage(3,300, "colonne1");
        } 
        else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
}

//APPEL DES FONCTIONS AU LANCEMENT DE LA PAGE
requete();
btnActif();
window.addEventListener('resize', requete);
