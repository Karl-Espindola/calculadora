let val_1=0;
let valAnterior=false;


function capturar(){
    val_1=parseFloat(val1.value);
    
}
function visualizar(op){
    if(val1.value!=""){
        operador.innerText=op;
        capturar();
        valAnterior=val_1;
        val1.value="";
    }
    
}
function AC(){
    operador.innerText="";
    val1.value="";
    display.innerHTML="";
}
function resultado(){
    if(operador.innerText!="" && val1.value!="" && valAnterior ){

        capturar();
        switch(operador.innerHTML){
            case "+":
                display.innerHTML=valAnterior+val_1;
                break
            case "-":
                display.innerHTML=valAnterior-val_1;
                break
            case "x":
                display.innerHTML=valAnterior*val_1;
                break
            case "/":
                (val_1==0)?display.innerHTML="infinito":display.innerHTML=valAnterior/val_1;
            break
        }
        
    }
}
let val1=document.getElementById("val-1");

let operador=document.getElementById("operador");
let display=document.getElementById("display");

let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let multi=document.getElementById("multi");
let division=document.getElementById("division");
let igual=document.getElementById("igual");
let borrar=document.getElementById("borrar");

suma.addEventListener("click",()=>{visualizar("+")});
resta.addEventListener("click",()=>{visualizar("-")});
multi.addEventListener("click",()=>{visualizar("x")});
division.addEventListener("click",()=>{visualizar("/")});
igual.addEventListener("click",resultado);
borrar.addEventListener("click",AC);