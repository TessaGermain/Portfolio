class flower{
    constructor(nom, description, prix, info, nomLatin, famille, hauteur, sol, exposition, floraison, saison, image, nouveaute) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.info = info;
        this.nomLatin = nomLatin;
        this.famille = famille;
        this.hauteur = hauteur;
        this.sol = sol;
        this.exposition = exposition;
        this.floraison = floraison;
        this.saison = saison;
        this.image = image;
        this.nouveaute = nouveaute;
    }
}
const amaryllis = new flower("amaryllis", "Lot de 10 graines", "2 €", "L’amaryllis est une plante bulbeuse de toute beauté qui fleurit à l’automne ou en hiver en intérieur.", "Hippeastrum", "Amaryllidacées", "30 à 60cm", "Terreau, bien drainé", "Ensoleillée", "Décembre à Mai", "hiver", "h_amaryllis.jpg", "non");
const penstemon = new flower("penstemon", "Lot de 15 graines", "3 €", "Le penstemon est une très belle vivace qui fleurit l’été et dont la floraison, très ornementale, égaye les jardins et les terrasses.", "Penstemon", "Scofulariacées", "0,3 à 120 cm", "Plutôt riche et bien drainé", "Ensoleillée", "Mai à Octobre", "printemps,ete,automne", "p_e_a_penstemon.jpg", "non");
const poinsettias = new flower("poinsettias", "Lot de 20 graines", "2 €", "Le poinsettia est l’une des plus jolies plantes d’intérieur, souvent remarquable au moment des fêtes de fin d’année et de Noël.", "Euphorbia Pulcherrima", "Euphorbiacées", "Inconnue", "Terreau", "Lumineuse", "Novembre à Mars", "hiver", "h_poinsettias.jpg", "non");
const aubepine = new flower("aubépine", "1 bouture", "10 €", "L'aubépine est un arbuste épineux à fleurs blanches ou rosées odorantes à la fin du printemps. Toute la plante a un intérêt thérapeutique.", "Crataegus Monogyna", "Crataegus", "6 à 12 m", "Tous, même calcaire, profond et drainé", "Ensoleillée", "Mai à Juin", "printemps", "p_aubepine.jpeg", "oui");
const bleuet = new flower("bleuet", "Lot de 10 graines", "2,50 €", "Magnifique plante sauvage qui porte bien son nom de par sa couleur, le bleuet pousse naturellement sur les terres acides, les champs, prairies et montagnes de nos régions.", "Centaurea cyanus", "Astéracées", "Jusqu'à 1,2 m", "Terreau", "Ensoleillée", "Mai à Juillet", "printemps,automne", "p_a_bleuet.jpg", "non");
const iris = new flower("iris", "Lot de 10 graines", "2 €", "L’iris est à la fois belle et élégante mais aussi de culture facile pour une floraison de toute beauté.", "Iris", "Iridacées", "20 à 90 cm", "Ordinaire", "Ensoleillée et mi-ombre", "Janvier à Juillet", "hiver,printemps,ete", "iris.jpg", "oui");
const jacinthe = new flower("jacinthe", "2 bulbes", "5 €", "La jacinthe est une plante au parfum enivrant et aux feuilles allongées. Elle saura égayer votre intérieur comme votre jardin par ses multiples couleurs.", "Hyacinthus", "Hyacinthacées", "15 à 45 cm", "Sol sableu drainé, Humus", "Ensoleillée et mi-ombre", "Janvier à Juin", "hiver,printemps,ete", "jacinthes.jpg", "non");
const jonquille = new flower("jonquille", "Lot de 15 graines", "3 €", "La jonquille, est une très jolie fleur, caractérisée par sa belle couleur jaune.", "Narcissus", "Amaryllidacées", "10 à 40 cm", "Ordinaire", "Ensoleillée et mi-ombre", "Février à Avril", "hiver,printemps", "jonquille.jpg", "non");
const rose = new flower("rose", "Lot de 20 graines", "2,50 €", "La rose des jardins se caractérise avant tout par la multiplication de ses pétales imbriqués, qui lui donne sa forme caractéristique.", "Rosa", "Rosaceae", "Jusqu'à 1m70", "Terreau bien drainé", "Ensoleillée et mi-ombre", "Mars à Juin", "printemps,ete", "rose.png", "non");
const protea = new flower("protea", "Lot de 10 graines", "3 €", "Les Protea sont des arbustes méditerranéens typiques des fynbos d'Afrique du Sud. Les fleuristes apprécient la longévité de leurs fleurs souvent démesurées parées de couleurs éclatantes.", "Protea", "Protéacée", "0,60 à 2 m", "Sol sableu", "Ensoleillée", "Mai à Octobre", "printemps,automne", "a_h_protea.png", "non");
const ranunculus = new flower("renoncule", "Lot de 10 graines", "2,50 €", "Avec les couleurs vives allant du blanc au rouge et leur effet brillant, ces fleurs constituent des éléments très décoratifs dans un jardin.", "ranunculus", "renonculacées", "30 à 60 cm", "Terreau, bien drainé", "Ensoleillée", "Mai à Juin", "printemps,ete", "h_p_ranunculus.png", "oui");
const tulipe = new flower("tulipe", "Lot de 20 graines", "1 €", "Elle se retrouve dans la plupart des jardins d'ornement y compris sur les terrasses et balcons. Les fleurs finissent par dégénérer au bout de 2 ou 3 ans, en général.", "tulipa", "Liliacées", "15 à 70 cm", "Sol sableu bien drainé", "Ensoleillée", "Mai à Juillet", "printemps,ete", "tulipe.png", "non");
const tournesol = new flower("tournesol", "Lot de 20 graines", "1,50 €", "Célébrée par Van Gogh, connue et appréciée dans le monde entier, la « fleur de soleil » est une géante d’une grande simplicité.", "Helianthus", "Astéracées", "0,30 à 5 m", "Sol sableu", "Ensoleillée", "Juillet à Octobre", "ete,automne", "tournesol.jfif", "non");
let totalFleur = [amaryllis, aubepine, bleuet, iris, jacinthe, jonquille, penstemon, poinsettias, protea, ranunculus, rose, tournesol, tulipe];


function affichage(){
  let navLinkGraine = document.getElementsByClassName("nav-link-graine");
  for(const graine of navLinkGraine){
    if(graine.classList.contains('active')){
      idGraine = graine.id;
    }
  }
  if(idGraine === "tous"){
    for(const fleur of totalFleur){
      document.getElementById('content-graine').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${fleur.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${fleur.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${fleur.nom}</h3>
            <p class="card-text text-center">${fleur.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${fleur.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${fleur.prix}</small>
            </div>
          </div>
        </article>
        </section>    
      `;
      if(fleur.nouveaute === "oui"){
        document.getElementById("badge-"+fleur.nom).innerHTML += `
        <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
        `;
      }
      document.getElementById('modal-graine').innerHTML += `
        <section class="modal fade" id="${fleur.nom}">
        <section class="modal-dialog w-100">
          <section class="modal-content p-2">
            <section class="modal-header">
              <h3 class="modal-title text-center text-uppercase">${fleur.nom}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </section>
            <section class="modal-body">
              <p>${fleur.info}</p>
              <section class="d-flex justify-content-around">
                <dl class="mx-2">
                  <dt>Nom Latin:</dt>
                  <dd>${fleur.nomLatin}</dd>
                  <dt>Famille :</dt>
                  <dd>${fleur.famille}</dd>
                  <dt>Hauteur :</dt>
                  <dd>${fleur.hauteur}</dd>
                </dl>  
                <dl class="mx-2">
                  <dt>Sol :</dt>
                  <dd>${fleur.sol}</dd>
                  <dt>Exposition :</dt>
                  <dd>${fleur.exposition}</dd>
                  <dt>Floraison :</dt>
                  <dd>${fleur.floraison}</dd>
                </dl>
              </section>
            </section>
            <section class="modal-footer">
              <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
              <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
            </section>
          </section>
        </section>
        </section>    
      `;  
    }
  } 
  else if(idGraine === "nouveaute"){
    for (const fleur of totalFleur){
      if(fleur.nouveaute === "oui"){
        document.getElementById('content-graine').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${fleur.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${fleur.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${fleur.nom}</h3>
            <p class="card-text text-center">${fleur.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${fleur.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${fleur.prix}</small>
            </div>
          </div>
        </article>
        </section>    
      `;
      if(fleur.nouveaute === "oui"){
        document.getElementById("badge-"+fleur.nom).innerHTML += `
        <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
        `;
      }
      document.getElementById('modal-graine').innerHTML += `
        <section class="modal fade" id="${fleur.nom}">
        <section class="modal-dialog w-100">
          <section class="modal-content p-2">
            <section class="modal-header">
              <h3 class="modal-title text-center text-uppercase">${fleur.nom}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </section>
            <section class="modal-body">
              <p>${fleur.info}</p>
              <section class="d-flex justify-content-around">
                <dl class="mx-2">
                  <dt>Nom Latin:</dt>
                  <dd>${fleur.nomLatin}</dd>
                  <dt>Famille :</dt>
                  <dd>${fleur.famille}</dd>
                  <dt>Hauteur :</dt>
                  <dd>${fleur.hauteur}</dd>
                </dl>  
                <dl class="mx-2">
                  <dt>Sol :</dt>
                  <dd>${fleur.sol}</dd>
                  <dt>Exposition :</dt>
                  <dd>${fleur.exposition}</dd>
                  <dt>Floraison :</dt>
                  <dd>${fleur.floraison}</dd>
                </dl>
              </section>
            </section>
            <section class="modal-footer">
              <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
              <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
            </section>
          </section>
        </section>
        </section>    
      `;  
      }
    }
  }
  else{
    for (const fleur of totalFleur){
      let saisonFleur = fleur.saison.split(',');
      if(saisonFleur.includes(idGraine)){
        document.getElementById('content-graine').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${fleur.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${fleur.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${fleur.nom}</h3>
            <p class="card-text text-center">${fleur.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${fleur.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${fleur.prix}</small>
            </div>
          </div>
        </article>
        </section>    
      `;
      if(fleur.nouveaute === "oui"){
        document.getElementById("badge-"+fleur.nom).innerHTML += `
        <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
        `;
      }
      document.getElementById('modal-graine').innerHTML += `
        <section class="modal fade" id="${fleur.nom}">
        <section class="modal-dialog w-100">
          <section class="modal-content p-2">
            <section class="modal-header">
              <h3 class="modal-title text-center text-uppercase">${fleur.nom}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </section>
            <section class="modal-body">
              <p>${fleur.info}</p>
              <section class="d-flex justify-content-around">
                <dl class="mx-2">
                  <dt>Nom Latin:</dt>
                  <dd>${fleur.nomLatin}</dd>
                  <dt>Famille :</dt>
                  <dd>${fleur.famille}</dd>
                  <dt>Hauteur :</dt>
                  <dd>${fleur.hauteur}</dd>
                </dl>  
                <dl class="mx-2">
                  <dt>Sol :</dt>
                  <dd>${fleur.sol}</dd>
                  <dt>Exposition :</dt>
                  <dd>${fleur.exposition}</dd>
                  <dt>Floraison :</dt>
                  <dd>${fleur.floraison}</dd>
                </dl>
              </section>
            </section>
            <section class="modal-footer">
              <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
              <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
            </section>
          </section>
        </section>
        </section>    
      `;  
      }
    }
  } 
}
affichage();
function category(e){
  let navLinkGraine = document.getElementsByClassName("nav-link-graine");
  for (const graine of navLinkGraine){
    graine.classList.remove('active');
  }
  e.srcElement.classList.add('active');
  document.getElementById('content-graine').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('content-graine').innerHTML = "";
    document.getElementById('modal-graine').innerHTML = "";
    affichage();  
    document.getElementById('content-graine').style.opacity = 1;
  }, 300);
}



class plante{
  constructor(nom, info, description, prix, famille, hauteur, type, image, nouveaute,){
    this.nom = nom;
    this.info = info;
    this.description = description;
    this.prix = prix;
    this.famille = famille;
    this.hauteur = hauteur;
    this.type = type;
    this.image = image;
    this.nouveaute = nouveaute;
  }
}
const acerPalmatum = new plante("acer", "Aussi appelé érable japonais, son écorce est normalement verte ou rougeâtre et devient gris clair ou brun grisâtre avec l'âge.", "1 arbre en pot", "25 €", "Erable", "Minimum 40 cm", "bonsai", "acer_palmatum.png", "oui");
const brasilicactus = new plante("brasilicactus", "Plante globulaire assez applatie. Elles sont endémiques au Brésil.", "1 pot", "2,50 €", "Parodia", "10 cm", "cactus", "brasilicactus.png", "non");
const columella = new plante("columella", "Plante formant une touffe, avec de petites colonnes montantes et se ramifiant.", "1 pot", "3,50 €", "Crassula", "10 à 20 cm", "succulente", "columella.png", "non");
const coryphantha = new plante("coryphantha", "Plante solitaire originaire du Mexique et du continent Nord américain", "1 pot", "3 €", "Cactaceae", "10 cm", "cactus", "coryphantha.png", "oui");
const esmeralda = new plante("esmeralda", "Les feuilles sont assez épaisses aux terminaisons arrondies. Elle forme assez rapidement une touffe en se ramifiant à la base.", "2 pot", "3 €", "Echeveria", "5 à 10 cm", "succulente", "esmeralda.png", "non");
const geometrizan = new plante("geometrizan", "Plante de type cierge et ramifiée", "1 pot", "15 €", "Mytillocactus", "0,20 à 1 m", "cactus", "geometrizan.png", "non");
const graptopetalum = new plante("graptopetalum", "La plante de porcelaine porte bien son nom puisque les feuilles se cassent en les touchant à peine.", "2 pots", "3 €", "Crassulacees", "5cm à 10cm", "succulente", "graptopetalum.png", "non");
const lanata = new plante("lanata", "Plante de type cierge, couverte de duvet blanc. Les épines sont souvent courtes.", "2 pots", "5 €", "Espotosoa", "15 à 30 cm", "cactus", "lanata.png", "oui");
const myriostigma = new plante("myriostigma", "Plante globulaire devenant ensuite érigée. Certaines sont sans épines.", "1 pot", "5 €", "Astrophytum", "jusqu'à 10 cm", "cactus", "myriostigma.png", "non");
const ovata = new plante("ovata", "Plante aux feuilles ovoïdes succulentes de couleur verte. L'été ces dernières vont rosir sous l'effet du soleil.", "1 pot", "6 €", "Crassula", "10 à 20 cm", "succulente", "ovata.png", "non");
const perforata = new plante("perforata", "Souvent constitué de feuilles charnues et très succulentes, elles sont essentiellement originaires d'Afrique.", "1 pot", "2,50 €", "Crassula", "7 cm", "succulente", "perforata.png", "oui");
const rupestris = new plante("rupestris", "Petite crassula aux feuilles vertes les unes sur les autres", "1 pot", "2,50 €", "Crassula", "10 cm", "succulente", "rupestris.png", "non");
const serissaFoetida = new plante("serissa", "Le serissa est un petit arbuste qui fleurit deux fois dans l’année. Un tronc grossier et de petites feuilles font de cet arbre un Bonsaï d’intérieur très courant.", "1 arbre en pot", "45 €", "Neige de juin", "Minimum 50 cm", "bonsai", "serissa.png", "non");
const zelkova = new plante("zelkova", "Le zelkova est aussi appelé orme du Japon. Ses feuilles sont ovales, dentelées et pointues.", "1 arbre en pot", "20 €", "Orme", "Minimum 40cm", "bonsai", "zelkova.png", "oui");
let totalPlante = [acerPalmatum, brasilicactus, columella, coryphantha, esmeralda, geometrizan, graptopetalum, lanata, myriostigma, ovata, perforata, rupestris, serissaFoetida, zelkova];

function affichagePlante(){
  let navLinkPlante = document.getElementsByClassName("nav-link-plante");
  for(const plant of navLinkPlante){
    if(plant.classList.contains("active")){
      idPlante = plant.id;
    }
  }
  if(idPlante === "toutes"){
    for(const plant of totalPlante){
      document.getElementById('content-plante').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${plant.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${plant.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${plant.nom}</h3>
            <p class="card-text text-center">${plant.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${plant.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${plant.prix}</small>
            </div>
          </div>
        </article>
        </section>    
      `;
      if(plant.nouveaute === "oui"){
        document.getElementById("badge-"+plant.nom).innerHTML += `
            <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
          `;
      }
      document.getElementById('modal-plante').innerHTML += `
        <section class="modal fade" id="${plant.nom}">
        <section class="modal-dialog w-100">
          <section class="modal-content p-2">
            <section class="modal-header">
              <h3 class="modal-title text-center text-uppercase">${plant.nom}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </section>
            <section class="modal-body">
              <p>${plant.info}</p>
              <section class="d-flex justify-content-around">
                <dl class="mx-2">
                  <dt>Famille :</dt>
                  <dd>${plant.famille}</dd>
                  <dt>Hauteur :</dt>
                  <dd>${plant.hauteur}</dd>
                </dl>  
              </section>
            </section>
            <section class="modal-footer">
              <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
              <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
            </section>
          </section>
        </section>
        </section>    
      `;        
    }
  }
  else if(idPlante === "nouveaute-plante"){
    for (const plant of totalPlante){
      if(plant.nouveaute === "oui"){
        document.getElementById('content-plante').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${plant.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${plant.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${plant.nom}</h3>
            <p class="card-text text-center">${plant.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${plant.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${plant.prix}</small>
            </div>
          </div>
        </article>
        </section>    
        `;
        if(plant.nouveaute === "oui"){
          document.getElementById("badge-"+plant.nom).innerHTML += `
          <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
          `;
        }
        document.getElementById('modal-plante').innerHTML += `
          <section class="modal fade" id="${plant.nom}">
          <section class="modal-dialog w-100">
            <section class="modal-content p-2">
              <section class="modal-header">
                <h3 class="modal-title text-center text-uppercase">${plant.nom}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </section>
              <section class="modal-body">
                <p>${plant.info}</p>
                <section class="d-flex justify-content-around">
                  <dl class="mx-2">
                    <dt>Famille :</dt>
                    <dd>${plant.famille}</dd>
                    <dt>Hauteur :</dt>
                    <dd>${plant.hauteur}</dd>
                  </dl>  
                </section>
              </section>
              <section class="modal-footer">
                <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
                <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
              </section>
            </section>
          </section>
          </section>    
        `; 
      }
    }
  } 
  else{
    for (const plant of totalPlante){
      if(plant.type === idPlante){
        document.getElementById('content-plante').innerHTML += `
        <section class="col">
        <article class="card shadow-sm" id="badge-${plant.nom}">
          <img class="bd-placeholder-img card-img-top w-100" src="ressources/image/${plant.image}" alt="">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center">${plant.nom}</h3>
            <p class="card-text text-center">${plant.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#${plant.nom}">Infos</button>
                <button type="button" class="btn btn-sm btn-secondary">Acheter</button>
              </div>
              <small class="text-muted fw-bold">${plant.prix}</small>
            </div>
          </div>
        </article>
        </section>    
        `;
        if(plant.nouveaute === "oui"){
          document.getElementById("badge-"+plant.nom).innerHTML += `
          <h4 class="titreBadge"><span class="badge bg-secondary">Nouveauté !</span></h4>
          `;
        }
        document.getElementById('modal-plante').innerHTML += `
          <section class="modal fade" id="${plant.nom}">
          <section class="modal-dialog w-100">
            <section class="modal-content p-2">
              <section class="modal-header">
                <h3 class="modal-title text-center text-uppercase">${plant.nom}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </section>
              <section class="modal-body">
                <p>${plant.info}</p>
                <section class="d-flex justify-content-around">
                  <dl class="mx-2">
                    <dt>Famille :</dt>
                    <dd>${plant.famille}</dd>
                    <dt>Hauteur :</dt>
                    <dd>${plant.hauteur}</dd>
                  </dl>  
                </section>
              </section>
              <section class="modal-footer">
                <p class="mx-3">Ces informations viennent du site <a href="https://www.jardiner-malin.fr/">jardiner-malin.fr</a></p>
                <button type="button" class="btn btn-secondary fw-normal" data-bs-dismiss="modal">Close</button>
              </section>
            </section>
          </section>
          </section>    
        `;  
      }
    }
  } 
}
affichagePlante();
function categoryPlante(e){
  let navLinkPlante = document.getElementsByClassName("nav-link-plante");
  for (const plant of navLinkPlante){
    plant.classList.remove('active');
  }
  e.srcElement.classList.add('active');
  document.getElementById('content-plante').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('content-plante').innerHTML = "";
    document.getElementById('modal-plante').innerHTML = "";
    affichagePlante();  
    document.getElementById('content-plante').style.opacity = 1;
  }, 300);
}
