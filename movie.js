const myObserver = new IntersectionObserver((efeito) => {
    efeito.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))



/*white.addEventListener('click', colorShow1)
gold.addEventListener('click', colorShow2)
green.addEventListener('click', colorShow3)*/


/*
const wrapper = document.querySelector('.wrapper-filmes')
let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true 
    startX = e.clientX
    this.style.cursor = 'grabbing'
})


wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed){
       return
    }

    this.scrollLeft += startX - e.clientX   

    
})*/

var radio = document.querySelector('.manual-btn')
 var cont = 1
 document.getElementById('radio1').checked = true


 setInterval(() => {
     proximaImg()
 },2000)

 function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
 }

 var btn = document.getElementById('btn')
 var email = document.getElementById('email')
 var p = document.getElementById('erro1')
 var check = document.getElementById('check')
 var titulo = document.querySelector('.titulo-form h1')
 function verifica(){
    if(email.value.length == 0 || email.value < btn ){
        p.style.display = 'block'
        email.style.borderStyle = 'solid'
        email.style.borderColor = 'red'
        email.style.userSelect = 'contain'

    }else{
        check.style.display = 'block'
        p.style.display = 'none'
        email.style.display = 'none'
        btn.style.display = 'none'
        titulo.style.display = 'none'
    }
 }


 function pergunta1(){
    var respo1 = document.getElementById('respo1')
    var per1 = document.querySelector('.pergunta1 h1')
    var i = document.querySelector('#respoi ')

     if(per1 = respo1.style.display =='block'){
        respo1.style.display = 'none'
        i.innerHTML = 'Tem Series no emovies?      <i class="fa-solid fa-arrow-down"></i>'
     }else{
        i.innerHTML = 'Tem Series no emovies?      <i class="fa-solid fa-minus"></i>'

        respo1.style.display = 'block'
     }
 }

 function pergunta2(){
    var respo2 = document.getElementById('respo2')
    var per2 = document.querySelector('.pergunta2 h1')
    var i2 = document.querySelector('#respoi2 ')

    if(per2 = respo2.style.display == 'block'){
        respo2.style.display = 'none'
        i2.innerHTML = 'quais dispositivos posso assistir emovies?      <i class="fa-solid fa-arrow-down"></i>'
    }else{
        i2.innerHTML = 'quais dispositivos posso assistir emovies?         <i class="fa-solid fa-minus"></i>'
        respo2.style.display = 'block'
    }
 }