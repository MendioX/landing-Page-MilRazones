'use strict'
const bigContainerMoveIt = document.querySelector('.bigContainerMoveIt');
const punto = document.querySelectorAll('.punto');
const img = document.querySelectorAll('.img');

punto.forEach( (cadaPunto , i) =>{
    punto[i].addEventListener('click', ()=>{

        let posicion = i;
        let operacion = posicion * (-33.33);

         bigContainerMoveIt.style.transform =  `translateX(${operacion}%)`
      
        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.remove('activo')
            // img[i].classList.remove('activoImg')
        })

        // img[i].classList.add('activoImg');
        punto[i].classList.add('activo')
    })
})