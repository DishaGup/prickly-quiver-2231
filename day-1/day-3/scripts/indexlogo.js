let login=document.getElementById("login")
let container=document.getElementById("login-container")
//login.addEventListener("click",shownumber)
let dropmenu=document.getElementById("number-div-drop")
let showdrop=document.getElementById("upper-country")
let sideDrop=document.getElementById("side-div-drop")

function shownumber(){

container.style.right="0";
container.style.opacity="100";
container.style.display="block"


}
function hidenumber() {
    container.style.right="-300px";
container.style.opacity="0";
container.style.display="block"
dropmenu.style.opacity="0"
dropmenu.style.top="-400px"
}
function showdropmenu() {
    dropmenu.style.opacity="100%"
    dropmenu.style.top="200px"
}

function showcountrydrop() {
    showdrop.style.transform="translateY(0%)"
    showdrop.style.opacity="10"
}

function hidecountrydrop(){
    showdrop.style.transform="translateY(-120%)"
    showdrop.style.opacity="0"
}
function hideside(){
sideDrop.style.right="-400px"
}
function showside(){
    sideDrop.style.right="0"
}