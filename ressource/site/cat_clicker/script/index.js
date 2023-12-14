 // compteur cookie
 sessionStorage.setItem("compteurCookie", 0);
 // compteur gain de cookie par seconde
 sessionStorage.setItem("gainSeconde", 1)
 // compteur gain de cookie au clic
 sessionStorage.setItem("gainClic", 1);
 // compteur et prix croquette
 sessionStorage.setItem("croquette", 0);
 sessionStorage.setItem("prixCroquette", 100);
 //compteur et prix herbe à chat
 sessionStorage.setItem("herbe", 0);
 sessionStorage.setItem("prixHerbe", 100);
 //compteur et prix sieste
 sessionStorage.setItem("sieste", 0);
 sessionStorage.setItem("prixSieste", 10000);
 // bonus affichage
sessionStorage.setItem("bonus", "non");
//skin
sessionStorage.setItem("skin", "skinNormal");
 //pseudo
 function verif(){
    pseudo = document.getElementById("pseudo").value;
    if(pseudo.length >= 5){
       sessionStorage.setItem("pseudo", pseudo);
       document.getElementById("btn-lien-jouer").style.display = "block";
       document.getElementById("erreur").style.display = "none";
    }
    else{
       document.getElementById("erreur").innerText = "Merci de rentrer un pseudo avec au moins 5 caractères";
       document.getElementById("erreur").style.display = "block";
       document.getElementById("btn-lien-jouer").style.display = "none";
    }   
 }