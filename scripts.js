let seleccion1 = document.getElementById('seleccion1')
let seleccion2 = document.getElementById('seleccion2')
let seleccion3 = document.getElementById('seleccion3')
let seleccion4 = document.getElementById('seleccion4')

let seccion1Texto = document.getElementById('seccion1Texto')
let seccion2Texto = document.getElementById('seccion2Texto')
let seccion3Texto = document.getElementById('seccion3Texto')
let seccion4Texto = document.getElementById('seccion4Texto')

const elementos = document.querySelectorAll('.animar');

let Noti1 = document.getElementById('Noti1')
let Noti2 = document.getElementById('Noti2')
let Noti3 = document.getElementById('Noti3')
let flechaIzq = document.getElementById('flechaIzq')
let flechaDer = document.getElementById('flechaDer')

notiActual1 = true;
notiActual2 = false;
notiActual3 = false;

let sectionHoy3 = document.getElementById('sectionHoy3')
let sectionHoy2 = document.getElementById('sectionHoy2')
let sectionHoy1 = document.getElementById('sectionHoy1')

let SectionHoy_Text1 = document.getElementById('SectionHoy_Text1')
let SectionHoy_Text2 = document.getElementById('SectionHoy_Text2')
let SectionHoy_Text3 = document.getElementById('SectionHoy_Text3')

let noticiaHoy1 = document.getElementById('noticiaActual1')
let noticiaHoy2 = document.getElementById('noticiaActual2')
let noticiaHoy3 = document.getElementById('noticiaActual3')

let tiempoTransition = 8000; 

function cicloNotisHoy() {
  // PRIMER BLOQUE (inicial)
  sectionHoy1.classList.add('aparecer');
  SectionHoy_Text1.classList.add('aparecer');
  sectionHoy1.classList.remove('opacidadHoy');
  SectionHoy_Text1.classList.remove('opacidadHoy');
  noticiaHoy1.classList.add('color');
  noticiaHoy1.classList.remove('whitColor');
  sectionHoy3.classList.remove('aparecer');
  sectionHoy2.classList.remove('aparecer');
  sectionHoy3.classList.add('opacidadHoy');
  sectionHoy2.classList.add('opacidadHoy');
  SectionHoy_Text2.classList.remove('aparecer');
  SectionHoy_Text3.classList.remove('aparecer');
  SectionHoy_Text2.classList.add('opacidadHoy');
  SectionHoy_Text3.classList.add('opacidadHoy');
  noticiaHoy2.classList.remove('color');
  noticiaHoy3.classList.remove('color');
  noticiaHoy2.classList.add('whitColor');
  noticiaHoy3.classList.add('whitColor');

  //PRIMER setTimeout: muestra la segunda sección
  setTimeout(() => {
    sectionHoy1.classList.add('opacidadHoy');
    SectionHoy_Text1.classList.add('opacidadHoy');
    sectionHoy1.classList.remove('aparecer');
    SectionHoy_Text1.classList.remove('aparecer');
    noticiaHoy1.classList.remove('color');
    noticiaHoy1.classList.add('whitColor');

    sectionHoy3.classList.remove('aparecer');
    sectionHoy2.classList.add('aparecer');
    sectionHoy3.classList.add('opacidadHoy');
    sectionHoy2.classList.remove('opacidadHoy');
    SectionHoy_Text2.classList.add('aparecer');
    SectionHoy_Text3.classList.remove('aparecer');
    SectionHoy_Text2.classList.remove('opacidadHoy');
    SectionHoy_Text3.classList.add('opacidadHoy');
    noticiaHoy2.classList.remove('whitColor');
    noticiaHoy3.classList.remove('color');
    noticiaHoy2.classList.add('color');
    noticiaHoy3.classList.add('whitColor');

    //SEGUNDO setTimeout: muestra la tercera sección
    setTimeout(() => {
      sectionHoy1.classList.add('opacidadHoy');
      SectionHoy_Text1.classList.add('opacidadHoy');
      sectionHoy1.classList.remove('aparecer');
      SectionHoy_Text1.classList.remove('aparecer');
      noticiaHoy1.classList.remove('color');
      noticiaHoy1.classList.add('whitColor');

      sectionHoy3.classList.add('aparecer');
      sectionHoy2.classList.remove('aparecer');
      sectionHoy3.classList.remove('opacidadHoy');
      sectionHoy2.classList.add('opacidadHoy');
      SectionHoy_Text2.classList.remove('aparecer');
      SectionHoy_Text3.classList.add('aparecer');
      SectionHoy_Text2.classList.add('opacidadHoy');
      SectionHoy_Text3.classList.remove('opacidadHoy');
      noticiaHoy2.classList.add('whitColor');
      noticiaHoy3.classList.add('color');
      noticiaHoy2.classList.remove('color');
      noticiaHoy3.classList.remove('whitColor');

      //TERCER setTimeout: reinicia el ciclo
      setTimeout(cicloNotisHoy, tiempoTransition);
    }, tiempoTransition);

  }, tiempoTransition);
}

cicloNotisHoy();


//Notis----------------Carrousel----------
flechaDer.addEventListener('click', ()=>{
  if(notiActual1){
flechaIzq.classList.add('aparecer')
flechaIzq.classList.remove('opacidadHoy')
Noti1.classList.add("opacidadHoy")
Noti1.classList.remove('aparecer')
Noti2.classList.add('aparecer')
Noti3.classList.add('opacidadHoy')
Noti3.classList.remove('aparecer')
notiActual1 = false;
notiActual2 = true;
notiActual3 = false;
}
 else if(notiActual2){
flechaDer.classList.remove('aparecer')
flechaDer.classList.add('opacidadHoy')
Noti1.classList.add("opacidadHoy")
Noti1.classList.remove('aparecer')
Noti2.classList.add('opacidadHoy')
Noti2.classList.remove('aparecer')
Noti3.classList.add('aparecer')
notiActual1 = false;
notiActual2 = false;
notiActual3 = true;
 }
})

flechaIzq.addEventListener('click', ()=>{
  if(notiActual3){
    flechaDer.classList.add('aparecer')
flechaDer.classList.remove('opacidadHoy')
Noti1.classList.add("opacidadHoy")
Noti1.classList.remove('aparecer')
Noti2.classList.add('aparecer')
Noti3.classList.add('opacidadHoy')
Noti3.classList.remove('aparecer')
notiActual1 = false;
notiActual2 = true;
notiActual3 = false;
  }
  else if(notiActual2){
flechaIzq.classList.remove('aparecer')
flechaIzq.classList.add('opacidadHoy')
Noti1.classList.add("aparecer")
Noti2.classList.add('opacidadHoy')
Noti2.classList.remove('aparecer')
Noti3.classList.add('opacidadHoy')
Noti3.classList.remove('aparecer')
notiActual1 = true;
notiActual2 = false;
notiActual3 = false;
  }
})



//------------------------NAV BAR-------------------------
//PRIMERA SECCION
seccion1Texto.addEventListener('mouseover', ()=>{
    seleccion1.classList.remove('opacity')
})


seccion1Texto.addEventListener('mouseleave', ()=>{
    seleccion1.classList.add('opacity')
})



//SEGUNDA SECCION
seccion2Texto.addEventListener('mouseover', ()=>{
    seleccion2.classList.remove('opacity')
})
seccion2Texto.addEventListener('mouseleave', ()=>{
    seleccion2.classList.add('opacity')
})


//TERCERA SECCION
seccion3Texto.addEventListener('mouseover', ()=>{
    seleccion3.classList.remove('opacity')
})
seccion3Texto.addEventListener('mouseleave', ()=>{
    seleccion3.classList.add('opacity')
})


//CUARTA SECCION
seccion4Texto.addEventListener('mouseover', ()=>{
    seleccion4.classList.remove('opacity')
})
seccion4Texto.addEventListener('mouseleave', ()=>{
    seleccion4.classList.add('opacity')
})


//ANIMAR ELEMENTOS
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible'); 
    } else {
      entrada.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.10
});

// Empezamos a observar cada uno
elementos.forEach((el) => observer.observe(el));