i= 0;
function menu(){
    console.log(i);
    if (i%2 === 0){
        document.getElementById('avion-papier').classList.add("animated");
        document.getElementById('menu').classList.add("animated");
        setTimeout(() => {
            document.getElementById('menu').innerHTML = `
            <div id="liste-menu" class="animated">
                <a href="index.html">ACCUEIL</a>
                <a href="developpement.html">DEVELOPPEMENT WEB</a>
                <a href="graphisme.html">GRAPHISME/WEBDESIGN</a>
                <!--<a href="index.html#contact">ME CONTACTER</a>-->
            </div>
            `;
            document.getElementById('avion-papier').classList.add("paused");
            document.getElementById('menu').classList.add("paused");   
            setTimeout(() => {
                document.getElementById('liste-menu').style.opacity = "1";
            }, 100); 
        }, 1500);
            
    }
    else{
        document.getElementById('liste-menu').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('menu').innerHTML = "";
            document.getElementById('menu').classList.remove("paused");
            document.getElementById("avion-papier").classList.remove("paused");  
        setTimeout(() =>{
            document.getElementById('menu').classList.remove("animated");
            document.getElementById("avion-papier").classList.remove("animated");           
        }, 1500);
        }, 550);
    }
    i++;
}
function verifActive(classElement, classRecherche){
    let tabElement = document.getElementsByClassName(classElement);
    let i = 0;
    for(let element of tabElement){
        if(element.classList.contains(classRecherche)){
            var positionActif = i;
        }
        i++;
    }
    return positionActif;
}
function slider(e){
    let slide = document.getElementsByClassName("slide");
    let point = document.getElementsByClassName("point");
    let slideActive = verifActive("slide","active");
    let pointActive = verifActive("point", "active");
    slide[slideActive].classList.remove("active");
    point[pointActive].classList.remove("active");
    if(e.srcElement.id == "fleche-gauche-pourpre"){
        if(slideActive == 0){
            var i = slide.length - 1;
        }
        else{
            var i = slideActive - 1;
        }
    }
    else if(e.srcElement.id == "fleche-droite-pourpre"){
        if(slideActive == slide.length -1){
            var i = 0;
        }
        else{
            var i = slideActive + 1;
        }
    }
    slide[i].classList.add("active");
    point[i].classList.add("active");
}
function fermeturePopUp(){
    let sectionPopUp = document.getElementById("projet-pop-up");
    document.getElementById("body").removeChild(sectionPopUp);
}