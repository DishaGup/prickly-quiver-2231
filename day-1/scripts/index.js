
let login=document.getElementById("login")
let container=document.getElementById("login-container")
//login.addEventListener("click",shownumber)
let dropmenu=document.getElementById("number-div-drop")
let showdrop=document.getElementById("upper-country")
//let sendAlert=document.getElementById("send-book")

function sendAlert(){
 alert("OTP sent to registered number")
}




function shownumber(){

container.style.right="0";
container.style.opacity="5";
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
    dropmenu.style.opacity="100"
    dropmenu.style.top="200px"
}

function showcountrydrop() {
    showdrop.style.transform="translateY(0%)"
    showdrop.style.opacity="10"
    showdrop.style.display="block"
}
function hidecountrydrop(){
    showdrop.style.transform="translateY(-100%)"
    showdrop.style.opacity="0"
}