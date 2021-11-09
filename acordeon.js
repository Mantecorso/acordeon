window.addEventListener('load', function() {

    /* coge todos los elementos de la  clase acordeon */
    let elementosAcordeon = this.document.getElementsByClassName('acordeon');

    for (let i = 0; i<elementosAcordeon.length; i++) {
        elementosAcordeon[i].addEventListener('click', function() {
            
            /* cuando haces click en un elemento acordeon lo activas y al siguiente elemento cambias el display */
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            if (panel.style.display == "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    }

})