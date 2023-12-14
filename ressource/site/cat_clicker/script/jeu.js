// FONCTIONS UTILITAIRES
function timeOutPatte(element, sousElement, temps){
    setTimeout(()=>{
        element.classList.remove("hidden");
        sousElement.style.opacity = 1;
        sousElement.classList.add("animated");
    }, temps);
}
function changementLargeur(){
    largeur = window.innerWidth;
    return largeur;
}
function verifLargeur(){
    let largeur = changementLargeur();
    if(largeur<=576){
        var tel = "-tel";
    }
    else{
        var tel = "";
    }
    return tel;
}
function switchLargeur(){
    affichageBonus();
    initialisationSkin();
    verifBonus("croquette", parseInt(sessionStorage.getItem("croquette")));
    verifBonus("herbe", parseInt(sessionStorage.getItem("herbe")));
    verifBonus("sieste", parseInt(sessionStorage.getItem("sieste")));
}


//FONCTIONS VERSION TEL
function boutonOngletTel(e){
    let element = e.srcElement;
    let id=element.id;
    if(id.includes("boutique")){
        var idBtn = "btn-boutique-tel";
    }
    if(id.includes("succes")){
        var idBtn = "btn-succes-tel";
    }
    if(id.includes("bonus")){
        var idBtn = "btn-bonus-tel";
    }
    if(id.includes("skin")){
        var idBtn = "btn-skin-tel";
    }
    while(id!=idBtn){
        element = element.parentNode;
        id = element.id;
    }
    var eIdBtn = id.split("-")[1];
    let bouton = document.getElementsByClassName("btn-tel");
    for(let button of bouton){
        if(button.classList.contains("actif")){
            var idBtn = button.id.split("-")[1];
        }
    }
    if(idBtn != eIdBtn){
        for(let button of bouton){
            button.classList.remove("actif");
            document.getElementById(`btn-${idBtn}-couleur-tel`).classList.add("hidden");
            document.getElementById(`btn-${idBtn}-gris-tel`).classList.remove("hidden");
            document.getElementById(`${idBtn}-tel`).opacity = 0;
            setTimeout(()=>{
                document.getElementById(`${idBtn}-tel`).classList.add("none");
            },300);
        }
        document.getElementById(`btn-${eIdBtn}-tel`).classList.add("actif");
        document.getElementById(`btn-${eIdBtn}-couleur-tel`).classList.remove("hidden");
        document.getElementById(`btn-${eIdBtn}-gris-tel`).classList.add("hidden");
        document.getElementById(`${eIdBtn}-tel`).classList.remove("none");
        setTimeout(()=>{
            document.getElementById(`${eIdBtn}-tel`).opacity = 1;
        },300);    
    }
}
function popUpSuccesTel(e){
    let id= e.srcElement.id;
    if(id.includes("fan")){
        var titre = "Fan de chat";
        var descri = 'Vous êtes un fan de chat ? Aidez Boubou à atteindre 10 <img src="ressources/elements/cat.png" class="chat-popup">';
        var condi = 'Ce succès se débloque au bout de 10 <img src="ressources/elements/cat.png" class="chat-popup">';
    }
    if(id.includes("adoption")){
        var titre = "Adoption des chats";
        var descri = 'Vous voulez adopter Boubou ? Aidez-le à atteindre 1 000 <img src="ressources/elements/cat.png" class="chat-popup">';
        var condi = 'Ce succès se débloque au bout de 1 000 <img src="ressources/elements/cat.png" class="chat-popup">';
    }
    if(id.includes("vieille")){
        var titre = "Vieille aux chats";
        var descri = 'Vous êtes devenu une véritable vieille aux chats !';
        var condi = 'Ce succès se débloque au bout de 100 000 <img src="ressources/elements/cat.png" class="chat-popup">';
    }
    if(id.includes("chatMarche")){
        var titre = "Chat Marche";
        var descri = 'Aidez Boubou à s’améliorer en achetant un bonus';
        var condi = 'Ce succès se débloque lorsque vous achetez votre premier bonus';
    }
    document.getElementById("fond-popup-succes").classList.remove("none");
    document.querySelector("#contenu-succes h4").innerText = titre;
    document.querySelector("#contenu-succes p").innerHTML = descri;
    document.querySelector("#contenu-succes span").innerHTML = condi;
}
function popUpBoutiqueTel(bonus){
    class BonusTel{
        constructor(image, nom, description, gain, prix){
            this.image = image;
            this.nom = nom;
            this.description = description;
            this.gain = gain;
            this.prix = prix;
        }
    }
    let croquette = new BonusTel("croquette.png","Croquettes","Ces croquettes permettront à Boubou d'avoir plus d'énergie !", 'Ce bonus génère +10 <img src="ressources/elements/cat.png" class="chat-popup"> /clic', sessionStorage.getItem("prixCroquette"));
    let herbe = new BonusTel("HerbeAChat.png","Herbe à chat", "Cette herbe à chat donnera à Boubou un regain de motivation !", 'Ce bonus génère +10 <img src="ressources/elements/cat.png" class="chat-popup"> /sec', sessionStorage.getItem("prixHerbe"));
    let sieste = new BonusTel("sieste.png","Sieste", "Après une bonne sieste, Boubou est plus reposé que jamais !", 'Ce bonus génère +1 000 <img src="ressources/elements/cat.png" class="chat-popup"> /clic et sec', sessionStorage.getItem("prixSieste"));
    document.getElementById("fond-popup-boutique").classList.remove("none");
    switch(bonus){
        case "croquette":
            var bon = croquette;
            break;
        case "herbe":
            var bon = herbe;
            break;
        case "sieste":
            var bon = sieste;
            break;
    }
    document.querySelector("#bonus-popup h4").innerText = bon.nom;
    document.querySelector("#bonus-popup img").src = `ressources/elements/${bon.image}`;
    document.querySelector("#fond-popup-boutique p").innerText = bon.description;
    document.querySelector("#fond-popup-boutique span").innerHTML = bon.gain;
    document.querySelector("#btn-popup h3").innerHTML = bon.prix+'<img src="ressources/elements/cat.png" id="chat-btn">';
    verifAchatTel(bonus, bon.prix);
}
function verifAchatTel(nomBonus, prix){
    if(parseInt(sessionStorage.getItem("compteurCookie")) >= prix){
        document.querySelector("#btn-popup img").src = "ressources/cadres/Planche.png";
        document.querySelector("#btn-popup h3").style.color = "#351500";
        switch(nomBonus){
            case "croquette":
                document.getElementById("btn-popup").onclick = function(){achat("croquette", "prixCroquette")};
                break;
            case "herbe":
                document.getElementById("btn-popup").onclick = function(){achat("herbe", "prixHerbe")};
                break;
            case "sieste":
                document.getElementById("btn-popup").onclick = function(){achat("sieste", "prixSieste")};
                break;    
        }
    }
    else{
        document.querySelector("#btn-popup img").src = "ressources/cadres/planche_gris.png";
        document.querySelector("#btn-popup h3").style.color = "#202020";
        document.getElementById("btn-popup").onclick = "";
    }
}
function fermeturePopUpTel(id){
    document.getElementById(id).classList.add("none");
}
function changementSkinTel(e){
    let skinActif = document.getElementsByClassName("skin-tel");
    for(let actif of skinActif){
        if(actif.classList.contains("actif")){
            actif.classList.remove("actif");
            document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/CadreMobile2_gris.png";
            document.querySelector(`#${actif.id} label`).style.color = "#202020";
            document.querySelector(`#${actif.id} input[type="checkbox"]`).checked = false;
        }
    }
    switch(e.srcElement.id){
        case "checkSkin-normal-tel":
            var skin = "skinNormal-tel";
            changementNormal();
            break;
        case "checkSkin-bonus-tel":
            if(sessionStorage.getItem("bonus")!="oui"){
                var skin = "skinNormal-tel";
                changementNormal();
                window.alert("Vous devez acheter un bonus pour accéder à ce skin");
                document.querySelector(`#skinBonus-tel input[type="checkbox"]`).checked = false;
            }
            else{
                var skin = "skinBonus-tel";
                changementBonus();    
            }
            break;
        case "checkSkin-noel-tel":
            var skin = "skinNoel-tel";
            changementNoel();
            break;
    }
    document.querySelector(`#${skin} .img-inventaire-gris`).src = "ressources/cadres/CadreMobile2.png";
    document.querySelector(`#${skin} label`).style.color = "#351500";
    document.querySelector(`#${skin} input[type="checkbox"]`).checked = true;
    document.getElementById(skin).classList.add("actif");
    let skinStorage = skin.split("-")[0];
    sessionStorage.setItem("skin", skinStorage);
}


// FONCTIONS MANIPULATION AFFICHAGE DANS LA PAGE
function boutonOnglet(e){
    let element = e.srcElement;
    let id=element.id;
    if(id.includes("boutique")){
        var idBtn = "btn-boutique";
        var classBtn = "btn-droite"
    }
    if(id.includes("succes")){
        var idBtn = "btn-succes";
        var classBtn = "btn-droite"
    }
    if(id.includes("bonus")){
        var idBtn = "btn-bonus";
        var classBtn = "btn-gauche"
    }
    if(id.includes("skin")){
        var idBtn = "btn-skin";
        var classBtn = "btn-gauche"
    }
    while(id!=idBtn){
        element = element.parentNode;
        id = element.id;
    }
    let bouton = document.getElementsByClassName(classBtn);
    for(button of bouton){
        if(button.classList.contains("actif")){
            let boutonActif = button;
            if(id != boutonActif.id){
                let idCouleur = button.id+"-couleur";
                let idGris = button.id+"-gris";
                document.getElementById(idCouleur).classList.add("hidden");
                document.getElementById(idGris).classList.remove("hidden");
                button.classList.remove("actif");
                if(button.id == "btn-boutique"){
                    document.getElementById("bonusBoutique").style.opacity = 0;
                    setTimeout(()=>{
                        document.getElementById("bonusBoutique").classList.add("hidden");
                    }, 300);
                }
                if(button.id == "btn-succes"){
                    document.getElementById("succes").style.opacity = 0;
                    setTimeout(()=>{
                        document.getElementById("succes").classList.add("hidden");
                    }, 300);
                }   
                if(button.id == "btn-bonus"){
                    document.getElementById("inventaireBonus").style.opacity = 0;
                    setTimeout(()=>{
                        document.getElementById("inventaireBonus").classList.add("hidden");
                    }, 300);
                }
                if(button.id == "btn-skin"){
                    document.getElementById("skin").style.opacity = 0;
                    setTimeout(()=>{
                        document.getElementById("skin").classList.add("hidden");
                    }, 300);
                }                                  
            }
        }
    }
    document.getElementById(id).classList.add("actif");
    for(button of bouton){
        if(button.classList.contains("actif")){
            let idCouleur = button.id+"-couleur";
            let idGris = button.id+"-gris";
            document.getElementById(idCouleur).classList.remove("hidden");
            document.getElementById(idGris).classList.add("hidden");
            if(button.id == "btn-boutique"){
                document.getElementById("bonusBoutique").classList.remove("hidden");
                setTimeout(()=>{
                    document.getElementById("bonusBoutique").style.opacity = 1;
                }, 300);
            }
            if(button.id == "btn-succes"){
                document.getElementById("succes").classList.remove("hidden");
                setTimeout(()=>{
                    document.getElementById("succes").style.opacity = 1;
                }, 300);
            } 
            if(button.id == "btn-bonus"){
                document.getElementById("inventaireBonus").classList.remove("hidden");
                setTimeout(()=>{
                    document.getElementById("inventaireBonus").style.opacity = 1;
                }, 300);
            }
            if(button.id == "btn-skin"){
                document.getElementById("skin").classList.remove("hidden");
                setTimeout(()=>{
                    document.getElementById("skin").style.opacity = 1;
                }, 300);
            }                                           
        }
    }
}
// affichage
function affichageNbCookie(){
    document.getElementById("nbCookie").innerText = `${affichageSimplifie(parseInt(sessionStorage.getItem("compteurCookie")), 2)} Chats`;
    document.getElementById("descriCookie").innerText = `${affichageSimplifie(parseInt(sessionStorage.getItem("gainClic")), 1)} chats par clic et ${affichageSimplifie(parseInt(sessionStorage.getItem("gainSeconde")), 1)} chats par sec`;
}
function affichageBonus(){
    var tel = verifLargeur();
    document.getElementById('nbCroquette'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("croquette")), 0)}`;
    document.getElementById('gainCroquette'+tel).innerHTML = `+${affichageSimplifie(parseInt(sessionStorage.getItem("croquette"))*10, 0)}<img src="ressources/elements/cat.png" class="chat chat-titre">/clic`;
    document.getElementById('nbHerbe'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("herbe")), 0)}`;
    document.getElementById('gainHerbe'+tel).innerHTML = `+${affichageSimplifie(parseInt(sessionStorage.getItem("herbe"))*10, 0)}<img src="ressources/elements/cat.png" class="chat chat-titre">/sec`;
    document.getElementById('nbSieste'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("sieste")), 0)}`;
    document.getElementById('gainSieste'+tel).innerHTML = `+${affichageSimplifie(parseInt(sessionStorage.getItem("sieste"))*1000, 0)}<img src="ressources/elements/cat.png" class="chat chat-titre">/clic et sec`; 
    document.getElementById('prixCroquetteGris'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixCroquette")), 0)}`;     
    document.getElementById('prixCroquetteCouleur'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixCroquette")), 0)}`;     
    document.getElementById('prixHerbeGris'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixHerbe")), 0)}`;
    document.getElementById('prixHerbeCouleur'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixHerbe")), 0)}`;
    document.getElementById('prixSiesteGris'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixSieste")), 0)}`;
    document.getElementById('prixSiesteCouleur'+tel).innerText = `x${affichageSimplifie(parseInt(sessionStorage.getItem("prixSieste")), 0)}`;
}
function affichageSimplifie(donnee, arrondi){
    if(donnee/1000000000000>=1){
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
//pop up
function popUpDescriOpen(e){
    var hoverBonus = e.srcElement.id;
    var descri = document.getElementById("hover-"+hoverBonus);
    document.getElementById(hoverBonus).style.zIndex = 5;
    descri.classList.remove("hidden");
    descri.style.height = "130px";
    if(descri.classList.contains("hover-bottom")){
        descri.style.bottom = "-115px";
    }
    else if(descri.classList.contains("hover-top")){
        descri.style.top = "-110px";       
    }
}
function popUpDescriClose(e){
    var hoverBonus = e.srcElement.id;
    var descri = document.getElementById("hover-"+hoverBonus);
    document.getElementById(hoverBonus).style.zIndex = 0;
    descri.style.height = "0px";
    if(descri.classList.contains("hover-bottom")){
        descri.style.bottom = "15px";
    }
    else if(descri.classList.contains("hover-top")){
        descri.style.top = "20px";
    }
    setTimeout(()=>{
        descri.classList.add("hidden");
    }, 500);
}
// skin
function changementBonus(){
    document.getElementById("cat-clicker").src = `ressources/elements/cat.png`;
    document.getElementById("clicker").style.backgroundImage = 'url("ressources/fond/couverture-2.jpg")';
    document.getElementById("cat-clicker").style.filter = "drop-shadow(8px 8px 20px #7976FF)";
    document.getElementById("centrer").style.color = "white";
    document.getElementById("pattes").classList.remove("hidden");
    var pattes = document.getElementsByClassName("div-patte");
    var imgPattes = document.getElementsByClassName("patte");
    let time = 600;
    for(let i=0; i<14; i++){
        timeOutPatte(pattes[i], imgPattes[i], time);
        time+=600;
    }
    setTimeout(()=>{
        for(let patte of imgPattes){
            patte.classList.remove("animated");
        }
        let time=600;
        for(let i=13; i>=0; i--){
            setTimeout(()=>{
                imgPattes[i].classList.add("animated");
                imgPattes[i].style.opacity = 0;
                setTimeout(()=>{
                    pattes[i].classList.add("hidden");
                },300);
            }, time)
            time+=600;
        }
        setTimeout(()=>{
            for(let patte of imgPattes){
                patte.classList.remove("animated");
            }
        }, 8400);
    },8400);
    intervalPatte = setInterval(()=>{
        let time = 600;
        for(let i=0; i<14; i++){
            timeOutPatte(pattes[i], imgPattes[i], time);
            time+=600;
        }
        setTimeout(()=>{
            for(let patte of imgPattes){
                patte.classList.remove("animated");
            }
            let time=600;
            for(let i=13; i>=0; i--){
                setTimeout(()=>{
                    imgPattes[i].classList.add("animated");
                    imgPattes[i].style.opacity = 0;
                    setTimeout(()=>{
                        pattes[i].classList.add("hidden");
                    },300);
                }, time)
                time+=600;
            }
            setTimeout(()=>{
                for(let patte of imgPattes){
                    patte.classList.remove("animated");
                }
            }, 8400);
        },8400);
    },17400);
}
function changementNormal(){
    document.getElementById("clicker").style.backgroundImage = 'url("ressources/fond/couverture-1.jpeg")';
    document.getElementById("cat-clicker").src = `ressources/elements/cat.png`;
    document.getElementById("cat-clicker").style.filter = "drop-shadow(8px 8px 20px white)";
    document.getElementById("centrer").style.color = "black";
    document.getElementById("pattes").classList.add("hidden");
    let labelCheckSkin = document.getElementsByClassName("labelCheckSkin");
    for(let label of labelCheckSkin){
        label.style.color = "black";
    }
}
function changementNoel(){
    document.getElementById("clicker").style.backgroundImage = `url("ressources/fond/couverture-noel.png")`;
    document.getElementById("cat-clicker").src = `ressources/elements/cat-noel.png`;
    document.getElementById("centrer").style.color = "white";
    document.getElementById("cat-clicker").style.filter = `drop-shadow(8px 8px 20px #950000)`;
    document.getElementById("pattes").classList.add("hidden");
}
function changementSkin(e){
    let skinActif = document.getElementsByClassName("skin");
    for(let actif of skinActif){
        if(actif.classList.contains("actif")){
            actif.classList.remove("actif");
            document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/bois3_gris.png";
            document.querySelector(`#${actif.id} label`).style.color = "#202020";
            document.querySelector(`#${actif.id} input[type="checkbox"]`).checked = false;
        }
    }
    switch(e.srcElement.id){
        case "checkSkin-normal":
            var skin = "skinNormal";
            changementNormal();
            break;
        case "checkSkin-bonus":
            if(sessionStorage.getItem("bonus")!="oui"){
                var skin = "skinNormal";
                changementNormal();
                window.alert("Vous devez acheter un bonus pour accéder à ce skin");
                document.querySelector(`#skinBonus input[type="checkbox"]`).checked = false;
            }
            else{
                var skin = "skinBonus";
                changementBonus();    
            }
            break;
        case "checkSkin-noel":
            var skin = "skinNoel";
            changementNoel();
            break;
    }
    document.querySelector(`#${skin} .img-inventaire-gris`).src = "ressources/cadres/bois3_Rempli.png";
    document.querySelector(`#${skin} label`).style.color = "#351500";
    document.querySelector(`#${skin} input[type="checkbox"]`).checked = true;
    document.getElementById(skin).classList.add("actif");
    sessionStorage.setItem("skin", skin);
}
function initialisationSkin(){
    let tel = verifLargeur();
    let skinStorage = sessionStorage.getItem("skin")+tel;
    document.getElementById(skinStorage).classList.add("actif");
    let skinActif = document.getElementsByClassName("skin"+tel);
    for(let actif of skinActif){
        if(actif.classList.contains("actif")){
            if(tel == "-tel"){
                document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/CadreMobile2.png";             
            }
            else{
                document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/bois3_Rempli.png";
            }
            document.querySelector(`#${actif.id} label`).style.color = "#351500";
            document.querySelector(`#${actif.id} input[type="checkbox"]`).checked = true;
            let idActif = actif.id.split("-")[0];
            switch(idActif){
                case "skinNormal":
                    changementNormal();
                    break;
                case "skinBonus":
                    changementBonus();
                    break;
                case "skinNoel":
                    changementNoel();
                    break;
            }
        }
        else{
            if(tel == "-tel"){
                document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/CadreMobile2_gris.png";               
            }
            else{
                document.querySelector(`#${actif.id} .img-inventaire-gris`).src = "ressources/cadres/bois3_gris.png";
            }
            document.querySelector(`#${actif.id} label`).style.color = "#202020";
            document.querySelector(`#${actif.id} input[type="checkbox"]`).checked = false;
        }
    }
}


// FONCTIONS MANIPULATION NB COOOKIES
function gainCookieClic(){
    sessionStorage.setItem("compteurCookie", parseInt(sessionStorage.getItem("compteurCookie"))+parseInt(sessionStorage.getItem("gainClic")));
    affichageNbCookie();
    verifAchat("croquette", parseInt(sessionStorage.getItem("prixCroquette")));
    verifAchat("herbe", parseInt(sessionStorage.getItem("prixHerbe")));
    verifAchat("sieste", parseInt(sessionStorage.getItem("prixSieste")));    
    document.getElementById("cat-clicker").classList.add("animated");
    setTimeout(()=>{
        document.getElementById("cat-clicker").classList.remove("animated");
    }, 100);
}
function gainCookieSeconde(){
    sessionStorage.setItem("compteurCookie", parseInt(sessionStorage.getItem("compteurCookie"))+parseInt(sessionStorage.getItem("gainSeconde")));
    affichageNbCookie();
}


//FONCTIONS VERIF BONUS ET SUCCES
function verifAchat(nomBonus, prix){
    let tel = verifLargeur();
    if(parseInt(sessionStorage.getItem("compteurCookie")) >= prix){
        document.getElementById(`${nomBonus}-noir${tel}`).classList.add('hidden');
        document.getElementById(`${nomBonus}-couleur${tel}`).classList.remove('hidden');
        switch(nomBonus){
            case "croquette":
                if(tel == "-tel"){
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){popUpBoutiqueTel("croquette")};     
                }
                else{
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){achat("croquette", "prixCroquette")};                       
                }
                break;
            case "herbe":
                if(tel == "-tel"){
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){popUpBoutiqueTel("herbe")};     
                }
                else{
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){achat("herbe", "prixHerbe")};
                }
                break;
            case "sieste":
                if(tel == "-tel"){
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){popUpBoutiqueTel("sieste")};     
                }
                else{
                    document.getElementById(`${nomBonus}-couleur${tel}`).onclick = function(){achat("sieste", "prixSieste")};
                }
                break;
        }
    }
    else{
        document.getElementById(`${nomBonus}-noir${tel}`).classList.remove('hidden');
        document.getElementById(`${nomBonus}-couleur${tel}`).classList.add('hidden');
        document.getElementById(`${nomBonus}-couleur${tel}`).onclick = "";
        if(tel == "-tel"){
            document.getElementById(`${nomBonus}-noir${tel}`).onclick = function(){popUpBoutiqueTel(nomBonus)};     
        }
    }
}
function verifBonus(nomBonus, bonus){
    let tel = verifLargeur();
    if(bonus > 0){
        document.getElementById(nomBonus+"-inventaire-gris"+tel).classList.add("hidden");
        document.getElementById(nomBonus+"-inventaire-couleur"+tel).classList.remove("hidden");
    }
}
function verifSucces(nomBonus, condition){
    let tel=verifLargeur();
    if(parseInt(sessionStorage.getItem("compteurCookie")) >= condition){
        document.getElementById(nomBonus+"-gris"+tel).classList.add("hidden");
        document.getElementById(nomBonus+"-couleur"+tel).classList.remove("hidden");
    }
}

// FONCTIONS ACHAT DE BONUS
function achat(bonus, prixBonus){
    sessionStorage.setItem("compteurCookie", parseInt(sessionStorage.getItem("compteurCookie"))-parseInt(sessionStorage.getItem(prixBonus)));
    sessionStorage.setItem(prixBonus, parseInt(sessionStorage.getItem(prixBonus))*1.5);
    sessionStorage.setItem(bonus, parseInt(sessionStorage.getItem(bonus))+1);
    switch(bonus){
        case "croquette":
            sessionStorage.setItem("gainClic", parseInt(sessionStorage.getItem("gainClic"))+10);
            break;
        case "herbe":
            sessionStorage.setItem("gainSeconde", parseInt(sessionStorage.getItem("gainSeconde"))+10);
            break;
        case "sieste":
            sessionStorage.setItem("gainClic", parseInt(sessionStorage.getItem("gainClic"))+1000);
            sessionStorage.setItem("gainSeconde", parseInt(sessionStorage.getItem("gainSeconde"))+1000);
            break;
    }
    affichageNbCookie();
    affichageBonus();
    document.getElementById(`${bonus}-couleur`).onclick = "";
    verifAchat(bonus, parseInt(sessionStorage.getItem(prixBonus)));
    verifBonus(bonus, parseInt(sessionStorage.getItem(bonus)));
    let tel = verifLargeur();
    if(sessionStorage.getItem("bonus") == "non"){
        let skinActif = document.getElementsByClassName("skin"+tel);
        for(let actif of skinActif){
            if(actif.classList.contains("actif")){
                actif.classList.remove("actif");
            }
        }
        document.getElementById("skinBonus"+tel).classList.add("actif");
        sessionStorage.setItem("skin", "skinBonus");
        sessionStorage.setItem("bonus", "oui");
        initialisationSkin();
    }
    if(tel == "-tel"){
        verifAchatTel(bonus, sessionStorage.getItem(prixBonus));
        document.querySelector("#btn-popup h3").innerHTML = affichageSimplifie(sessionStorage.getItem(prixBonus))+'<img src="ressources/elements/cat.png" id="chat-btn">';
    }
}

//FONCTIONS REQUETES
// enregistre le score du joueur
function requeteScore(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitementScore;
    httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"username": sessionStorage.getItem("pseudo"), "score": parseInt(sessionStorage.getItem("compteurCookie"))});
    httpRequest.send(data);
}
function traitementScore(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        } 
        else {
            alert('Il y a eu un problème avec la requête.');
        }
    }       
}
// recupère le score du joueur et le compare avec celui enregistré
function requeteGetScore(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitementGetScore;
    httpRequest.open('GET', `https://sae-301.azurewebsites.net/get-user-score.php?username=${encodeURIComponent(sessionStorage.getItem("pseudo"))}`, true);
    httpRequest.send();
}
function traitementGetScore(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let scoreEnregistre = JSON.parse(httpRequest.responseText);
            if(scoreEnregistre.score < parseInt(sessionStorage.getItem("compteurCookie"))){
                requeteScore();
            }
        } 
        else {
            requeteScore();
        }
    }       
}


// APPEL DES FONCTIONS AU DEBUT DU JEU + /SECONDE + /MINUTE
//appelle les fonctions d'affichage qd l'écran est redimensionné
window.addEventListener('resize', switchLargeur);
// fonction d'affichage au démarrage
affichageNbCookie();
affichageBonus();
verifBonus("croquette", parseInt(sessionStorage.getItem("croquette")));
verifBonus("herbe", parseInt(sessionStorage.getItem("herbe")));
verifBonus("sieste", parseInt(sessionStorage.getItem("sieste")));
initialisationSkin();
// passer le pseudo d'un onglet à l'autre
document.getElementById("class-btn").href = `classement.html?pseudo=${sessionStorage.getItem("pseudo")}`;
// interval ttes les secondes et les minutes
setInterval(()=>{
    gainCookieSeconde();
    verifAchat("croquette", parseInt(sessionStorage.getItem("prixCroquette")));
    verifAchat("herbe", parseInt(sessionStorage.getItem("prixHerbe")));
    verifAchat("sieste", parseInt(sessionStorage.getItem("prixSieste")));
    verifSucces("fan", 10);
    verifSucces("adoption", 1000);
    verifSucces("vieille", 100000);
    if(sessionStorage.getItem("bonus")=="oui"){
        let tel = verifLargeur();
        document.getElementById("chatMarche-gris"+tel).classList.add("hidden");
        document.getElementById("chatMarche-couleur"+tel).classList.remove("hidden");
    }
},1000);
setInterval(()=>{
    requeteGetScore();
}, 60000);