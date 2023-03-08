var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarocultarmenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearbarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

function pintarbarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
        elementos[x].style.backgroundColor(940253);
    }
    else{
       clearInterval(interval)
    }        
}

function efectohabilidades(){
    let html = document.getElementById("html");
    crearbarra(html);
    let javascript = document.getElementById("javascript");
    crearbarra(javascript);
    let wordpress = document.getElementById("wordpress");
    crearbarra(wordpress);
    let photoshop = document.getElementById("photoshop");
    crearbarra(photoshop);
    let contadores = [-1,-1,-1,-1]
    let entro = false;

    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 & entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarbarra(html, 16, 0, intervalHtml),100})
        const intervaljavascript = setInterval(function(){
            pintarbarra(javascript, 11, 1, intervaljavascript),100});
        const intervalwordpress = setInterval(function(){
            pintarbarra(wordpress, 11, 2, intervalwordpress),100});
        const intervalphotoshop = setInterval(function(){
            pintarbarra(photoshop, 11, 3, intervalphotoshop),100});
    }
}

