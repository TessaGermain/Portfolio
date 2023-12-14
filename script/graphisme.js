console.log('test');
i = 0;
function filtreApparition(){
    if(i%2 == 0){
        document.getElementById('filtre-actif').innerHTML += `<h2 id="titreFiltre">Langage(s) utilisé(s)</h2>`;
        document.getElementById('checkbox').style.display = "block";
        document.getElementById('filtre').classList.add('active');   
        i++; 
    }
    else{
        document.getElementById('filtre-actif').removeChild(document.getElementById('titreFiltre'));
        document.getElementById('checkbox').style.display = "none";
        document.getElementById('filtre').classList.remove('active');           
        i++;
    }
}
class projet{
    constructor(id,titre,date,temps, intitule,logicielsUtilises,descriptionCourte,descriptionDetaille,tachesRealisees,pdf,img){
        this.id=id;
        this.titre = titre;
        this.date = date;
        this.temps = temps;
        this.intitule = intitule;
        this.logicielsUtilises = logicielsUtilises;
        this.descriptionCourte= descriptionCourte;
        this.descriptionDetaille = descriptionDetaille;
        this.tachesRealisees = tachesRealisees;
        this.pdf = pdf;
        this.img = img;
    }
}
// PROJET TRIE PAR ORDRE ALPHABETIQUE  
damCat = new projet(
    "damCat", "Maquette d'un jeu de dame mobile", "Novembre 2022", "4h", "Projet scolaire en binôme", ["Figma"], 
    "Maquette d'un jeu de dame mobile sur le thème des chats.",
    `Le but était de créer l'interface la plus ergonomique possible pour un jeu de dame mobile. Ce jeu devait contenir certaines pages bien précises à savoir : une page de chargement, une page d'accueil, une page de jeu, une page de victoire ou de défaite, une page de défis quotidiens, une page pour les paramètres, une page de succès, une page d'évènement et une page de statistiques.`,
    ["Pages d'accueil", "Pages du jeu", "Page des défis quotidiens", "Page évènement"],
    "DamCat.pdf", "damCat.jpg");  
fest4Game = new projet(
    "fest4Game", "Affiche du Fest4Game 2022", "Février 2022", "Environ 20h", "Projet professionnel", ["Photoshop"], "Création de l'affiche du Fest4Game 2022 qui est un salon du jeu/jeu vidéo organisé par l'ENSSAT (22300 Lannion)",
    `J'ai été chargé de réaliser l'affiche servant pour la communication à l'évènement Fest4Game de 2022. Il s'agit d'un salon de jeux et jeux vidéo organisé par les étudiants de l'ENSSAT une école d'ingénieur à Lannion (22300).<br>
    L'organisateur m'a fourni différents visuels d'affiche qu'il appréciait comme exemple. L'affiche devait également respecter certaines contraintes à savoir : reprendre les couleurs utiliser par l'évènement, refléter le mondu du jeu et afficher des informations précises (lieu et date de l'évènement, bandeau de sponsor, QR code des réseaux sociaux...).
    Suite à cela, j'ai effectué un premier jet et le lui ai soumis, après discussion, j'ai effectué les modifications nécessaires. Au bout de plusieurs versions, l'affiche a été validé, imprimé et affiché pour la communication de l'évènement.`,
    ["Réunion avec le client pour connaitre ses attentes", "Réalisation des éléments graphiques de l'affiche","Composition de l'affiche", "Modification de certains éléments à la demande du client"],
    null, "fest4Game.png");
highResolution = new projet(
    "highResolution", "Maquette d'un site", "Novembre 2021", "Environ 5h", "Projet scolaire en groupe", ["Adobe XD", "Photoshop", "Illustrator"],
    `Identité graphique et maquette de la page d'accueil et d'un article d'un site d'information sur les nouvelles technologies.`,
    `Ce projet consistait à créer l'identité graphique et la maquette en fonction de la cible choisie. On devait donc effectuer une veille concurentielle et des personas puis créer les maquettes adéquates.<br>
    Je me suis occupée de créer le logo, la charte graphique et les maquettes de ce projet.`,
    ["Création du logo", "Charte graphique", "Maquette de la page d'accueil et d'une page d'article"],
    "ressource/pdf/HighResolution.pdf", "highResolution.jpg");
onMyWay = new projet(
    "onMyWay", "Maquette d'un site de vente de chaussure", "Octobre 2021", "Environ 5h", "Projet scolaire individuel", ["Adobe XD"],
    `Maquettes de trois pages d'un site de e-commerce de chaussure.`,
    `Ce projet était constitué de deux parties distinctes :<br>
    La première était d'analyser la concurrence et les cibles via une veille concurrentielle et des personas.<br>
    La deuxième était de créer les maquettes du site en prenant en compte les cibles et en respectant les règles d'ergonomie.`,
    ["Veille concurentielle", "Personas", "Maquette de la page d'accueil, d'une page produit et de la page de connexion/inscription"],
    "ressource/pdf/OnMyWay.pdf", "onMyWay.jpg");
paperGame = new projet(
    "paperGame", "Paper Game", "Octobre 2022", "Environ 6h", "Projet scolaire individuel", ["Indesign","Illustrator","Photoshop"],
    `Création d'une charte graphique pour un magasin de jeu fictif.`,
    `Ce projet consistait à créer un logo typographique et une charte graphique pour une société fictive.<br>
    J'ai commencé par créer le logo typographique en utilisant une police avec un style d'écriture de machine à écrire pour le mot "Paper" et une police avec un style de graffiti pour le mot "Game". Pour la couleur, j'ai choisi du bleu foncé pour faire penser à l'encre des stylos bleus.
    Le logotype a été décliné en quatre versions : la noir, la blanche sur fond noir, la bleu et la blanche sur fond bleu. Il nous a ensuite été demandé de créer 3 mock-up de nos logo, j'ai choisi de mettre le logo blanc sur une deckbox (boîte de rangement pour les jeux de carte), le logo noir sur des t-shirt et le logo bleu sur une affiche.<br>
    Pour mettre en page la charte graphique, j'ai utilisé les polices et couleurs choisies pour le logo et l'affiche et créer des cases pour bien structurer la charte graphique.`,
    ["Recherche de police en lien avec le nom choisi", "Création du logo typographique avec Illustrator", "Choix des couleurs de la charte graphique", "Choix des polices d'accompagnement"],
    "ressource/pdf/PaperGame.pdf", "paperGame.jpg");
totalProjet = [damCat, paperGame,fest4Game,highResolution, onMyWay];
affichageProjet(totalProjet);
function affichageProjet(totalProjet){
    document.getElementById('projet').innerHTML = "";
    let filtre = document.getElementsByClassName('filtre');
    let filtreActif = [];
    let filtreNul = 0;
    for(let fil of filtre){
        if(fil.checked == true){
            filtreActif.push(fil.id);
            filtreNul++;
        }
    }
    if(filtreNul == 0){
        afficher(totalProjet);
    }
    else{
        let projetAffiche = [];
        for(let fil of filtreActif){
            for(let proj of totalProjet){
                if(proj.logicielsUtilises.includes(fil)){
                    if(!projetAffiche.includes(proj)){
                        projetAffiche.push(proj);
                    }
                }
            }
        }
        afficher(projetAffiche);
    }
    console.log(filtreActif);
}
function afficher(tableau){
    let i = 0;
    for(let tab of tableau){
        if(i%2 == 0){
            document.getElementById('projet').innerHTML += `
            <section class="section-projet">
                <div id="${tab.id}" class="projet projet-gauche">
                    <h2>${tab.titre}</h2>
                    <div class="date-temps">
                        <h3>${tab.date}</h3>
                        <div class="tiret"></div>
                        <h3>${tab.temps}</h3>    
                    </div>
                    <div class="group-badge" id="badge-${tab.id}">
                    </div>
                    <h3>${tab.intitule}</h3>
                    <p>${tab.descriptionCourte}</p>
                    <div class="group-bouton" id="bouton-${tab.id}">
                        <button class="bouton" id="bouton-${tab.id}" onclick="PopUpProjet(event, totalProjet)">En savoir +</button>
                    </div>
                </div>
                <img id="img-${tab.id}" class="img-projet" src="image/projet/${tab.img}" alt="${tab.titre}">
            </section>`;
            setTimeout(()=>{
                for(let badge of tab.logicielsUtilises){
                    document.getElementById(`badge-${tab.id}`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                if(tab.pdf != null){
                    document.getElementById(`bouton-${tab.id}`).innerHTML += `<a href="${tab.pdf}" target="_blank" class="bouton">Voir le projet</a>`;
                }
            });        
        }
        else{
            document.getElementById('projet').innerHTML += `
            <section class="section-projet">
                <img id="img-${tab.id}" class="img-projet" src="image/projet/${tab.img}" alt="${tab.titre}">
                <div id="${tab.id}" class="projet projet-droite">
                    <h2>${tab.titre}</h2>
                    <div class="date-temps">
                        <h3>${tab.date}</h3>
                        <div class="tiret"></div>
                        <h3>${tab.temps}</h3>    
                    </div>
                    <div class="group-badge" id="badge-${tab.id}">
                    </div>
                    <h3>${tab.intitule}</h3>
                    <p>${tab.descriptionCourte}</p>
                    <div class="group-bouton" id="bouton-${tab.id}">
                        <button class="bouton" id="bouton-${tab.id}" onclick="PopUpProjet(event, totalProjet)">En savoir +</button>
                    </div>
                </div>
            </section>`;
            setTimeout(()=>{
                for(let badge of tab.logicielsUtilises){
                    document.getElementById(`badge-${tab.id}`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                if(tab.pdf != null){
                    document.getElementById(`bouton-${tab.id}`).innerHTML += `<a href="${tab.pdf}" target="_blank" class="bouton">Voir le projet</a>`;
                }
            });                   
        }
        i++;
    }
}
function PopUpProjet(e, tableau){
    let idSplit = e.srcElement.id.split("-");
    for(let tab of tableau){
        if(tab.id == idSplit[1]){
            document.getElementById("body").innerHTML += `
            <section id="projet-pop-up">
                <div id="contenu-projet-pop-up">
                    <div id="croix" onclick="fermeturePopUp()">X</div>
                    <div class="fleche bulle" id="fleche-gauche">
                        <img src="image/fleche-gauche-pourpre.png" alt="" class="pourpre" id="fleche-gauche-pourpre" onclick="slider(event)">
                        <img src="image/fleche-gauche.png" alt="">
                    </div>
                    <div class="fleche bulle" id="fleche-droite">
                        <img src="image/fleche-droite-pourpre.png" alt="" class="pourpre" id="fleche-droite-pourpre" onclick="slider(event)">
                        <img src="image/fleche-droite.png" alt="">
                    </div>
                    <div class="slide active" id="slide1">
                        <h2>${tab.titre}</h2>
                        <div class="date-temps">
                            <h3>${tab.date}</h3>
                            <div class="tiret"></div>
                            <h3>${tab.temps}</h3>
                        </div>
                        <div class="group-badge" id="badge-pop-up">
                        </div>
                        <h3>Tâches réalisées :</h3>
                        <ul id="liste-pop-up-projet">
                        </ul>
                    </div>
                    <div class="slide" id="slide2">
                        <h2>${tab.titre}</h2>
                        <h3>Description détaillée du projet</h3>
                        <p>${tab.descriptionDetaille}</p>
                    </div>
                    <div id="group-point">
                        <div class="point active"></div>
                        <div class="point"></div>
                    </div>
                </div>
            </section>    
            `;
            setTimeout(()=>{
                for(let badge of tab.logicielsUtilises){
                    document.getElementById(`badge-pop-up`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                for(let tache of tab.tachesRealisees){
                    document.getElementById("liste-pop-up-projet").innerHTML += `<li>${tache}</li>`;
                }
            });        
        }
    }
}