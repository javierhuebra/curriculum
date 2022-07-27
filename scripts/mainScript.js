"use strict"
let valor;
let testigo=[];
let cerrarCosas=(numero)=>{
    if(numero==0){
        document.querySelector(".contenido-experiencia").style.display="none";
        /* document.querySelector(".sub-0").style.backgroundColor="#595691"; */
    }else if(numero==1){
        document.querySelector(".contenido-educacion").style.display="none";
        /* document.querySelector(".sub-1").style.backgroundColor="#595691"; */
    }else if(numero==2){
        document.querySelector(".contenido-habilidades").style.display="none";
        /* document.querySelector(".sub-2").style.backgroundColor="#595691"; */
    }else if(numero==3){
        document.querySelector(".contenido-certificaciones").style.display="none";
       /*  document.querySelector(".sub-3").style.backgroundColor="#595691"; */
    }else if(numero==4){
        document.querySelector(".contenido-idioma").style.display="none";
        /* document.querySelector(".sub-4").style.backgroundColor="#595691"; */
    }else if(numero==5){
        document.querySelector(".contenido-contacto").style.display="none";
       /*  document.querySelector(".sub-5").style.backgroundColor="#595691"; */
    }else if(numero==6){
        document.querySelector(".contenido-personales").style.display="none";
        /* document.querySelector(".sub-6").style.backgroundColor="#595691"; */
    }
};

document.querySelector(".experiencia").addEventListener("click",()=>{
    document.querySelector(".contenido-experiencia").style.display="flex";
    if(valor!=0){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-0").style.backgroundColor="#9D9ADE"; */
    valor=0;
});

document.querySelector(".educacion").addEventListener("click",()=>{
    document.querySelector(".contenido-educacion").style.display="block";
    if(valor!=1){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-1").style.backgroundColor="#9D9ADE"; */
    valor=1;
});

document.querySelector(".habilidades").addEventListener("click",()=>{
    document.querySelector(".contenido-habilidades").style.display="block";
    if(valor!=2){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-2").style.backgroundColor="#9D9ADE"; */
    valor=2;
});

document.querySelector(".certificaciones").addEventListener("click",()=>{
    document.querySelector(".contenido-certificaciones").style.display="flex";
    if(valor!=3){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-3").style.backgroundColor="#9D9ADE"; */
    valor=3;
});

document.querySelector(".idioma").addEventListener("click",()=>{
    document.querySelector(".contenido-idioma").style.display="block";
    if(valor!=4){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-4").style.backgroundColor="#9D9ADE"; */
    valor=4;
});

document.querySelector(".contacto").addEventListener("click",()=>{
    document.querySelector(".contenido-contacto").style.display="flex";
    if(valor!=5){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-5").style.backgroundColor="#9D9ADE"; */
    valor=5;
});

document.querySelector(".personales").addEventListener("click",()=>{
    document.querySelector(".contenido-personales").style.display="flex";
    if(valor!=6){
        cerrarCosas(valor);
    }
    /* document.querySelector(".sub-6").style.backgroundColor="#9D9ADE"; */
    valor=6;
});

