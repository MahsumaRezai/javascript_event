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
function go() {
    let g = document.getElementsByTagName("img");
    for (let y = 0; y < g.length; y++) {
        g[y].style.border = " 10px solid gold"

    }

}