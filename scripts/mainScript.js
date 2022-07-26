"use strict"
let valor;
let cerrarCosas=(numero)=>{
    if(numero==0){
        document.querySelector(".contenido-experiencia").style.display="none";
    }else if(numero==1){
        document.querySelector(".contenido-educacion").style.display="none";
    }else if(numero==2){
        document.querySelector(".contenido-habilidades").style.display="none";
    }else if(numero==3){
        document.querySelector(".contenido-certificaciones").style.display="none";
    }else if(numero==4){
        document.querySelector(".contenido-idioma").style.display="none";
    }else if(numero==5){
        document.querySelector(".contenido-contacto").style.display="none";
    }else if(numero==6){
        document.querySelector(".contenido-personales").style.display="none";
    }
};

document.querySelector(".experiencia").addEventListener("click",()=>{
    document.querySelector(".contenido-experiencia").style.display="flex";
    cerrarCosas(valor);
    valor=0;
});

document.querySelector(".educacion").addEventListener("click",()=>{
    document.querySelector(".contenido-educacion").style.display="block";
    cerrarCosas(valor);
    valor=1;
});

document.querySelector(".habilidades").addEventListener("click",()=>{
    document.querySelector(".contenido-habilidades").style.display="block";
    cerrarCosas(valor);
    valor=2;
});

document.querySelector(".certificaciones").addEventListener("click",()=>{
    document.querySelector(".contenido-certificaciones").style.display="flex";
    cerrarCosas(valor);
    valor=3;
});

document.querySelector(".idioma").addEventListener("click",()=>{
    document.querySelector(".contenido-idioma").style.display="block";
    cerrarCosas(valor);
    valor=4;
});

document.querySelector(".contacto").addEventListener("click",()=>{
    document.querySelector(".contenido-contacto").style.display="flex";
    cerrarCosas(valor);
    valor=5;
});

document.querySelector(".personales").addEventListener("click",()=>{
    document.querySelector(".contenido-personales").style.display="flex";
    cerrarCosas(valor);
    valor=6;
});