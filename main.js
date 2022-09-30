let numeros=[];
let operador="";

let val_1="";
let valAnterior_1="";
let valAnterior_2="";
let val_resultado="";

function ponerEnPantalla(i){
    
    if(operador=="" && val_resultado==""){
        val_1=i;
        valAnterior_1=display.innerHTML;
        val_1=valAnterior_1+val_1;
        display.innerText=val_1;
        
    }
    if(operador!="" && val_resultado!=""){
        val_1=val_resultado;
    }
    if(operador!=""){
        val_2=i;
        valAnterior_2=display.innerHTML;
        val_2=valAnterior_2+val_2;
        display.innerText=val_2;
        
    } 
}

function operacion(op){
    operador=op;
    display.innerHTML="";

}

function AC(){
    display.innerHTML="";
    val_1="";
    val_2="";
    valAnterior_1="";
    valAnterior_2="";
    val_resultado="";
}
function resultado(){
    if(display.innerText!="" ){
        val_1=parseFloat(val_1);
        val_2=parseFloat(val_2);

        switch(operador){
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
        operador="";
        val_resultado=display.innerText;
    }
}


let display=document.getElementById("display");

let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let multi=document.getElementById("multi");
let division=document.getElementById("division");
let igual=document.getElementById("igual");
let borrar=document.getElementById("borrar");

suma.addEventListener("click",()=>{operacion("+")});
resta.addEventListener("click",()=>{operacion("-")});
multi.addEventListener("click",()=>{operacion("x")});
division.addEventListener("click",()=>{operacion("/")});
igual.addEventListener("click",resultado);
borrar.addEventListener("click",AC);

for(let i=0; i<=9; i++){
    numeros[i]=document.getElementById("num"+i);
    numeros[i].addEventListener("click",()=>{
        ponerEnPantalla(i)
    });
}