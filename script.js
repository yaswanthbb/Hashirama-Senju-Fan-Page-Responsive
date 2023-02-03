let paraGraph1 = document.getElementById("paragraphChange1")
let paraGraph2 = document.getElementById("paragraphChange2")
let paraGraph3 = document.getElementById("paragraphChange3")
document.getElementById("button1").style.backgroundColor = "white";
paraGraph2.classList.add("d-none");
paraGraph3.classList.add("d-none");
function aboutButton(){
    document.getElementById("button1").style.backgroundColor = "white";    
    document.getElementById("button2").style.backgroundColor = "#F2EEF1";    
    document.getElementById("button3").style.backgroundColor = "#F2EEF1";
    paraGraph1.classList.remove("d-none");
    paraGraph2.classList.add("d-none");
    paraGraph3.classList.add("d-none");
}
function abilitiesButton(){
    document.getElementById("button1").style.backgroundColor = "#F2EEF1";    
    document.getElementById("button2").style.backgroundColor = "white";    
    document.getElementById("button3").style.backgroundColor = "#F2EEF1";
    paraGraph1.classList.add("d-none");
    paraGraph2.classList.remove("d-none");
    paraGraph3.classList.add("d-none");    

}
function senjutsuButton(){
    document.getElementById("button1").style.backgroundColor = "#F2EEF1";    
    document.getElementById("button2").style.backgroundColor = "#F2EEF1";    
    document.getElementById("button3").style.backgroundColor = "white";
    paraGraph1.classList.add("d-none");
    paraGraph2.classList.add("d-none");
    paraGraph3.classList.remove("d-none");
}