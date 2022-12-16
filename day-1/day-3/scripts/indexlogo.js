let login=document.getElementById("login")
let container=document.getElementById("login-container")
//login.addEventListener("click",shownumber)
let dropmenu=document.getElementById("number-div-drop")
let showdrop=document.getElementById("upper-country")


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
}
function showdropmenu() {
    dropmenu.style.opacity="100%"
    
}

function showcountrydrop() {
    // showdrop.style.transform="translateY(0%)"
    showdrop.style.opacity="10"
}