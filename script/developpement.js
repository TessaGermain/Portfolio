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
    constructor(id,titre,date,temps, intitule,langagesUtilises,descriptionCourte,descriptionDetaille,tachesRealisees,lien,video,img){
        this.id=id;
        this.titre = titre;
        this.date = date;
        this.temps = temps;
        this.intitule = intitule;
        this.langagesUtilises = langagesUtilises;
        this.descriptionCourte= descriptionCourte;
        this.descriptionDetaille = descriptionDetaille;
        this.tachesRealisees = tachesRealisees;
        this.lien = lien;
        this.video = video;
        this.img = img;
    }
}
// PROJET TRIE PAR ORDRE ALPHABETIQUE    
bubbleWave = new projet(
    "bubbleWave", "Bubble Wave", "Mars - Avril 2022", "environ 30h", "Projet scolaire individuel", ["HTML", "CSS", "PHP", "SQL", "JavaScript"], 
    "Site vitrine pour un salon de coiffure fictif devant également donner accès à un espace compte client et employé",
    `Ce site devait permettre aux personnels du salon de pouvoir ajouter des rdv aux clients et d'appliquer une réduction au bout du 10ème rdv. Il devait également servir de site vitrine pour le salon et permettre aux clients d'accéder à leur espace compte et de voir le nombre de rdv restants avant la réduction.<br><br>
    Afin de mener ce projet à bien, j'ai commencé par créer un planning prévisionnel pour hiérarchiser et organiser les tâches que j'avais à effectuer.<br><br>
    J'ai ensuite créer la maquette de toutes les pages du site. Après avoir fini, je suis passé au développement du site web, j'ai commencé par toute la partie front que je maitrisais mieux pour finir par le développement back-end en PHP.`,
    ["Identité graphique du site","Maquettes du site","Slider des réalisations du salon","Micro-animations","Création et gestion d'une base de données","Système d'inscription/connexion", "Espace compte différent pour le personnel et les clients", "Système d'ajout de rdv", "Système de réduction"],
    null, "VIDEO A MODIFIER", "bubbleWave.jpg");
calendar = new projet(
    "calendar", "OTK Cours", "Septembre 2022", "environ 15h", "Projet personnel", ["HTML", "CSS", "PHP", "SQL"],
    "Site permettant de gérer un historique de cours particulier et de générer des PDF de facture.",
    `J'ai développé ce site suite à une demande de mon père qui est professeur particulier de mathématiques. Il voulait un moyen simple d'avoir une trace des cours qu'il donne avec leur date et le tarif afin d'envoyer un devis par mois à ses parents d'élèves.<br><br>
    J'ai commencé par le développement front du site en créant différents pop-up pour les formulaires. Ensuite, j'ai créé la base de données et l'ai relié aux formulaires en utilisant du PHP et du SQL. J'ai également ajouté une fonctionnalité permettant de générer un PDF à partir d'un tableau qui résume les cours du mois avec la librairie DomPDF.<br><br>
    Une fonctionnalité d'envoi de mail automatique contenant le PDF du résumé du mois a été réfléchi mais n'a pas encore été ajouté au site.`,
    ["Identité graphique et maquettes du site", "Développement front", "Système de connexion", "Création et gestion d'une base de données", "Ajout de cours", "Génération de PDF"],
    null, "VIDEO A MODIFIER", "calendar.jpg");
catClicker = new projet(
    "catClicker", "Clicker Game", "Décembre 2022", "environ 30h", "Projet scolaire en groupe", ["HTML","CSS","JavaScript"],
    "Clicker game responsive sur le thème des chats.",
    `Le but de ce clicker game est que le joueur amasse le plus de chats possible. Pour ce faire, il a à sa disposition 3 bonus différents : un gain de +10 au clic, un gain de +10 par secondes et un gain de +1000 au clic et par seconde. Le joueur peut en acheter autant qu'il veut du moment qu'il a un solde suffisant (les bonus achetables sont en couleur tandis que ceux non achetables sont en noir et blanc).
    A l'achat de son premier bonus, le fond change.<br>Le joueur a également la possibilité de changer de skin pendant la partie.<br> Tout au long de sa progression le joueur va pouvoir débloquer des succès.<br><br>
    Toutes les minutes, le score du joueur est enregistré grâce à une API et il peut le consulter à tout moment dans la page de classement. Toutes les données du joueur sont également sauvegardé pour que même si il réactualise son onglet les valeurs restent.`,
    ["Intégration de la page jeu", "Fonctionnement du jeu en JavaScript", "Enregistrement des données dans des sessionStorage", "Utilisation de requêtes AJAX pour sauvegarder et récupérer les scores dans une API"],
    "ressource/site/cat_clicker/index.html", "VIDEO A MODIFIER", "catClicker.jpg");
cuisineMaman = new projet(
    "cuisineMaman", "Site de recette de cuisine", "Juin 2022", "environ 15h", "Projet personnel", ["HTML","CSS","PHP","SQL"], 
    "Site permettant d'accéder à différentes recettes triées par catégorie et d'en ajouter.", 
    `Ce site a été pensé pour être un livre de recette en ligne. Ainsi une fois connecté, il permet d'ajouter/modifier/supprimer des recettes.<br><br>
    Plusieurs catégories existent pour les recettes : entrée, plat, dessert, boisson, etc... Ainsi, j'ai mis un système de filtre en place afin qu'il soit plus simple de naviguer entre les recettes.<br>
    L'utilisateur peut également ajouter des recettes en favori ce qui lui permet de rajouter une note sur celles-ci.<br><br>
    Une fonctionnalité pour dresser une liste des ingrédients nécessaires pour réaliser les recettes sélectionnées avait été pensé mais n'a pas pu être ajouté au site à cause d'un manque de temps.`,
    ["Identité graphique du site", "Maquettes du site", "Développement front", "Micro-animation en CSS", "Système de connexion", "Création d'une base de données", "Ajout/Modification/Suppression de recette dans la base de données", "Système de favori", "Système de filtres"],
    null, "VIDEO A MODIFIER", "cuisineMaman.jpg");    
dragAndDrop = new projet(
    "dragAndDrop", "Puzzle Drag&Drop", "Septembre - Octobre 2022", "environ 10h", "Projet personnel", ["HTML", "CSS", "JavaScript"],
    "Jeu de puzzle en plusieurs niveaux créé en Drag&Drop",
    `Ce jeu de puzzle a été développer en HTML et CSS pour la mise en page et en JavaScript pour l'interactivité. Toutes les interactivités du puzzle repose sur les évènements "onDrag" et "onDrop" de JavaScript.<br><br>
    Le puzzle se compose d'une grille sur laquelle on peut glisser les images (dont l'ordre d'apparition dans la barre est aléatoire). Lorsque la grille est complète, l'utilisateur peut vérifier son puzzle. S'il est faux, les images mal placées retourne dans la barre et l'utilisateur peut réessayer.<br>
    Lorsqu'il arrive à compléter le puzzle, un message de félicitations s'affiche avec le nombre de coups réalisés et le temps qu'il a mis pour le compléter.`,
    ["Développement front", "Système de Drag&Drop", "Système de vérification du puzzle", "Système de compteur"],
    "ressource/site/Drag & Drop/Niveau_1/index.html", "VIDEO A MODIFIER", "drag&drop.jpg");
floral = new projet(
    "floral", "Floral", "Octobre 2022", "environ 10h", "Projet scolaire en groupe", ["HTML", "CSS", "Bootstrap", "JavaScript"],
    "Site d'une boutique de fleur fictive",
    `Site sur un thème libre afin de se familiariser avec Bootstrap. Le but de ce projet était d'utiliser le plus d'élément de Bootstrap tout en gardant une cohérence et en les rendant accessible.`,
    ["Identité graphique du site", "Développement front de la page boutique", "Création de class et objet JavaScript", "Accessibilité du site"],
    "ressource/site/floral/boutique.html", null, "floral.jpg");      
kawaiiIsland = new projet(
    "kawaiiIsland", "Site de gestion de ressources", "Août 2022", "environ 10h", "Projet personnel en binôme", ["HTML", "CSS", "PHP", "SQL"],
    "Site créé pour aider à gérer les ressources du jeu Kawaii Island.",
    `Ce site permet à l'utilisateur de rentrer une valeur pour chaque ressource du jeu et calcul ensuite quel moyen de production il faut déployer selon un palier minimum des ressources.`,
    ["Identité graphique du site", "Développement front", "Pop-up des éléments à ajouter et enlever", "Traduction d'un algorithme écrit en Python en PHP", "Création et gestion d'une base de données", "Modification des stocks"],
    null, "VIDEO A MODIFIER", "kawaiiIsland.jpg"); 
levelUpTechConsulting = new projet(
    "levelUpTechConsulting", "Level Up Tech Consulting", "Juin - Juillet 2022", "5 semaines", "Stage de 1ère année", ["Wordpress"],
    "Maintenance et ajout de contenu sur un site Wordpress",
    `Le but principal de ce stage était de créer des modules de formations accessibles avec des plug-in Wordpress tels que Learndash et Divi. J'ai également travailler sur de l'ajout de contenu, l'ajout d'une newsletter et le référencement du site.`,
    ["Ajout de contenu avec Divi", "Création de formations avec Learndash", "Création d'exercices interactif avec H5P", "Création d'une newsletter avec Sendinblue", "Traduction du site avec LocoTranslate", "Référencement du site avec Yoast"],
    "https://level-up-tech-consulting.com/", null, "lutc.jpg");
mfp = new projet(
    "mfp", "Site de gestion de jardin", "Mars - Mai 2022", "environ 40h", "Projet personnel", ["HTML", "CSS", "PHP", "SQL"],
    `Site permettant de suivre les différentes plantations et récoltes d'un jardin.`,
    `Ce site a été pensé afin de pouvoir avoir une vision globale sur un jardin.<br><br>
    Il comporte des cartes déjà existantes des différents jardins et permet d'ajouter le type de plante en fonction du mois et le nombre de pieds plantés.<br>
    L'utilisateur peut indiquer lorsqu'il a récolté des plantes et combien de kg. Une fonctionnalité existe pour calculer le nombre total de kg récolté pour un certain type de plante. L'utilisateur a également accès à un récapitulatif des récoltes qui indique pour chaque type de plante les dates et les quantités en kg de récolte.`,
    ["Illustration du site", "Carte des jardins en display grid","Création de la base de données", "Ajout/modification/suppression des plants sur une case précise de la carte","Fonctionnalité pour ne pouvoir ajouter que les plantes dont c'est la période de semis", "Fonctionnalité de calcul de la quantité des récoltes pour un type de plante"],
    null, "VIDEO A MODIFIER", "mfp.jpg");
reservationMateriel = new projet(
    "reservationMateriel", "Réservation de matériel VR", "Mai - Juin 2022", "environ 25h", "Projet scolaire en binôme", ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
    "Site de réservation de matériel pour une université fictive",
    `Ce site devait permettre de gérer la réservation de matériel pour une université. Les réservations devaient être approuvés par les professeurs avant d'être validé.`,
    ["Identité graphique du site", "Maquettes du header, page de visualisation du matériel, page de réservation", "Page de visualisation du matériel et de réservation", "Animation de la barre de recherche", "Système de connexion/inscription", "Vérification du format d'adresse mail", "Ajout/modification/suppression de matériel", "Vérification de la possibilité de la réservation", "Système de validation des réservations par les professeurs"],
    "https://sae203-germain-mehault.000webhostapp.com/", "VIDEO A MODIFIER", "reservationMateriel.jpg");

totalProjet = [catClicker,floral,dragAndDrop,calendar,kawaiiIsland,levelUpTechConsulting,cuisineMaman,reservationMateriel,bubbleWave, mfp];
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
                if(proj.langagesUtilises.includes(fil)){
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
                for(let badge of tab.langagesUtilises){
                    document.getElementById(`badge-${tab.id}`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                if(tab.lien != null){
                    document.getElementById(`bouton-${tab.id}`).innerHTML += `<a href="${tab.lien}" class="bouton">Voir le projet</a>`;
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
                for(let badge of tab.langagesUtilises){
                    document.getElementById(`badge-${tab.id}`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                if(tab.lien != null){
                    document.getElementById(`bouton-${tab.id}`).innerHTML += `<a href="${tab.lien}" target="_blank" class="bouton">Voir le projet</a>`;
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
                    <div class="slide" id="slide3">
                        <h2>${tab.titre}</h2>
                        <h2 class="videoAVenir">Vidéo à venir</h2>
                        <video src="${tab.video}" class="video"></video>
                    </div>
                    <div id="group-point">
                        <div class="point active"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
            </section>    
            `;
            setTimeout(()=>{
                for(let badge of tab.langagesUtilises){
                    document.getElementById(`badge-pop-up`).innerHTML +=`<div class="badge">${badge}</badge>`;
                }
                for(let tache of tab.tachesRealisees){
                    document.getElementById("liste-pop-up-projet").innerHTML += `<li>${tache}</li>`;
                }
            });        
        }
    }
}