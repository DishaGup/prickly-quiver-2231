let login=document.getElementById("login")
let container=document.getElementById("login-container")
//login.addEventListener("click",shownumber)
let dropmenu=document.getElementById("number-div-drop")
let showdrop=document.getElementById("upper-country")
let touch=document.getElementById("touch")
let touchHead=document.getElementById("touch-head")
touch.addEventListener("click",()=>{
//let h1=document.createElement("h1")
touchHead.innerText="Thankyou for your consideration. Hold back, We will contact you soon. "

console.log("clicked");
})



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
dropmenu.style.left= "-100%"
}
function showdropmenu() {
    dropmenu.style.opacity="100%"
   dropmenu.style.left= "50%"
}
function showcountrydrop() {
     showdrop.style.transform="translateY(0%)"
    showdrop.style.opacity="10"

    
}

function hidecountrydrop(){
    showdrop.style.transform="translateY(-120%)"
    showdrop.style.opacity="0"
}