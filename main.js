let val_1=0;
let val_2=0;

function capturar(){
    val_1=parseFloat(val1.value);
    val_2=parseFloat(val2.value);
}
function visualizar(op){
    operador.innerText=op
}
function AC(){
    operador.innerText="";
    val1.value="";
    val2.value="";
    display.innerHTML="";
}
function resultado(){
    if(operador.innerText!="" && val1.value!="" && val2.value !=""){
        capturar();
        switch(operador.innerHTML){
            case "+":
                display.innerHTML=val_1+val_2;
                break
            case "-":
                display.innerHTML=val_1-val_2;
                break
            case "x":
                display.innerHTML=val_1*val_2;
                break
            case "/":
                (val_2==0)?display.innerHTML="infinito":display.innerHTML=val_1/val_2;
            break
        }
        
    }
}
let val1=document.getElementById("val-1");
let val2=document.getElementById("val-2");
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