let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})


window.sr = ScrollReveal ({reset: true});

sr.reveal('.txt-animado',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000
});

sr.reveal('.scroll-title-primary',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000
});
sr.reveal('.scroll-title-secound',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000
});



sr.reveal('.scroll-paragrafo-primary',{
    rotate: {x: 0,y: 80, z:0},
    duration:2500
});

sr.reveal('.scroll-btn-primary',{
    rotate: {x: 0,y: 100, z:0},
    duration:3000
});



sr.reveal('.img-topo-site',{
    rotate: {x: 100,y: 100, z:0},
    duration:2000,
    delay:200
})


sr.reveal('.habilidades-titulo',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000
});


sr.reveal('.habilidades-box',{
    rotate: {x: 0,y: 80, z:0},
    duration:3000,
    delay: 100
    
})

sr.reveal('.img-sobre',{
    rotate: {x: 0,y: 100, z:100},
    duration:2000,
    delay:200
    
})
sr.reveal('.titulo-sobre',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000,
    delay:100
})

sr.reveal('.paragrafo-sobre',{
    rotate: {x: 0,y: 80, z:0},
    duration:2500,
    delay:100
    
})
sr.reveal('.sub-social',{
    rotate: {x: 0,y: 80, z:0},
    duration:2500,
    delay:100
    
})

sr.reveal('.btn-social',{
    rotate: {x: 0,y: 80, z:0},
    duration:2500,
    delay:100
    
})


sr.reveal('.sub-projetos',{
    rotate: {x: 0,y: 80, z:0},
    duration:2000,
    delay:100
})

sr.reveal('.projeto-1',{
    rotate: {x: 0,y: 100, z:100},
    duration:1800,
    
    
})

sr.reveal('.projeto-2',{
    rotate: {x: 0,y: 100, z:100},
    duration:2300,
    delay:100
    
})

sr.reveal('.projeto-3',{
    rotate: {x: 0,y: 100, z:100},
    duration:2800,
    delay:150
    
})


sr.reveal('section.formulario',{
    duration: 2500,
    delay: 50,
    distance:'90px'

})






