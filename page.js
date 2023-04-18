var user = localStorage.getItem("person")

document.getElementById("welcome").innerHTML = "Welcome " + user + ", This website will show you a slideshow about Chess"

function next() {
    window.location = "page2.html"
}

function goKing() {
    window.location = "pageKing.html"
}
function goQueen() {
    window.location = "pageQueen.html"
} 
function goBishop() {
    window.location = "pageBishop.html"
} 
function goKnight() {
    window.location = "pageKnight.html"
} 
function goRook() {
    window.location = "pageRook.html"
} 
function goPond() {
    window.location = "pagePond.html"
}

function Back(){
    window.location = "page2.html"
}

function goBack(){
    window.location = "index.html"
}

function castle(){
    window.location = "moveCastle.html"
}

function specialBack(){
    window.location = "page3.html"
}

function promo(){
    window.location = "movepromo.html"
}

function passant(){
    window.location = "movePassant.html"
}