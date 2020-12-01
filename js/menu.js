    // funcion para activar menu responsive
function actived(){
    document.getElementById('nav').classList.toggle('navbar-links-responsive')
    document.getElementById('nav').classList.toggle('navbar-links')
}
    // Funcion para efecto de mostrar btn 
function onScrollTop(){
    if (window.pageYOffset > 350 ) {
        document.querySelector(".float").style.bottom = "15px";
    } else {
        document.querySelector(".float").style.bottom = "-45px";
    }
}

    // funcion para btn scroll Up
function scrollUp(){
     window.scroll(0,0)
}

