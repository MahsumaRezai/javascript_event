let cil = 1;
function zom() {
    let w = document.getElementsByTagName("img");
    if (cil % 2 == 0) {
        for (let x = 0; x < w.length; x++) {
            w[x].style.width = "300px"

        }
    }
    else {
        for (let x = 0; x < w.length; x++) {
            w[x].style.width = "400px"

        }
    }
    cil++
}
function on() {
    let g = document.getElementsByTagName("img");
    for (let y = 0; y < g.length; y++) {
        g[y].style.border = " 5px solid gold"

    }

}
function of() {
    let off = document.getElementsByTagName("img");
    for (let z = 0; z < off.length; z++) {
        off[z].style.border = "none";

    }
}