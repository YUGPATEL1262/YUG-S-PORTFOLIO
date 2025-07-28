

let tl = gsap.timeline()
tl.from(".container",{
    opacity:0,
    duration:0.7,
    delay:0.2,
    y:30
    
})
tl.from(".nav h1",{
    opacity:0,
    duration:0.3,
    y:-100
})
tl.from(".linksm a",{
    opacity:0,
    duration:0.3,
    y:-100,
    stagger:0.3
    
})
tl.from(".buttonsl button",{
    opacity:0,
    duration:0.3,
    stagger:0.3,
    y:-100,
    ease: "elastic.out(2,1)"
})
tl.from(".yug",{
    opacity:0,
    duration:0.7,
    y:-200,
    scale:3,
    ease: "elastic.out(2,1)"  
})
tl.from(".developer",{
    opacity:0,
    duration:0.7,
    y:4000,
    scale:1,
    ease: "power4.out",
})
tl.from(".underline",{
    opacity:0,
    duration:0.3,
    y:200,
    ease: "elastic.out(1,0.5)"
})
gsap.from(".heropara h2",{
    opacity:0,
    scale:2,
    duration:1.5,
    y:200,
    ease: "elastic.out(2,1)",
    scrollTrigger:{
        trigger:".heropara h2",
        scroller:"body",
        start:"top 90%"
    }
})
gsap.from(".heropara p",{
    opacity:0,
    duration:1,
    y:100,
    stagger:1,
    ease: "elastic.out(1,3)",
    scrollTrigger:{
        trigger:".heropara h2",
        scroller:"body",
        start:"top 90%"
    }
})
gsap.from(".heading h2",{
    opacity:0,
    scale:1,
    duration:0.5,
    ease: "power4.inOut",
    y: -250,
    scrollTrigger:{
        trigger:".heading h2",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        scrub:true
    }
})
gsap.from(".headingp h2",{
    opacity:0,
    scale:1,
    duration:0.5,
    ease: "power4.inOut",
    y: -250,
    scrollTrigger:{
        trigger:".headingp h2",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        scrub:true
    }
})

gsap.from(".react",{
    rotate:720,
    duration:10,
    ease:"none",
    repeat:-1
})
gsap.from(".skill-card",{

    duration:1,
    y:200,
    ease: "power1.inOut",
    scrollTrigger:{
        trigger:".skill-card",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:true,
    }
})
gsap.from(".skill-card img",{
    stagger:0.8,
    opacity:0,
    duration:1,
    x:-10,
        scrollTrigger:{
        trigger:".skill-card",
        scroller:"body",
        start:"top 80%",
        end:"top 30%",
        scrub:true,
    }
})
gsap.to(".project1",{
    scale:1.1,
    scrollTrigger:{
        trigger:".project1",
        scroller:"body",
        start:"top 60%",
        scrub:1
    }
})
gsap.to(".project2",{
    scale:1.1,
    scrollTrigger:{
        trigger:".project2",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
gsap.from(".headingc h3",{
    opacity:0,
    scale:1,
    duration:0.5,
    ease: "power4.inOut",
    x:-100,
    scrollTrigger:{
        trigger:".headingc h3",
        scroller:"body",
        start:"top 67%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".headingc h1",{
    opacity:0,
    scale:1,
    duration:0.5,
    x:100,
    ease: "power4.inOut",
    scrollTrigger:{
        trigger:".headingc h1",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".contactform",{
    opacity:0,
    scale:1,
    duration:2,
    ease: "power4.inOut",
    y:100,
    scrollTrigger:{
        trigger:".contactform",
        scroller:"body",
        start:"top 90%", 
        end:"top 40%" ,
        scrub:true
    }
})
gsap.from(".contactlinks",{
    opacity:0,
    scale:1,
    duration:2,
    ease: "power4.inOut",
    y:100,
    scrollTrigger:{
        trigger:".contactlinks",
        scroller:"body",
        start:"top 90%", 
        end:"top 70%" ,
        scrub:true
    }
})






particlesJS("particles-js", {"particles":{"number":{"value":185,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.665416005259192,"random":true,"anim":{"enable":false,"speed":10,"opacity_min":0.1,"sync":false}},"size":{"value":3.9,"random":true,"anim":{"enable":false,"speed":100.69930069930071,"size_min":48.75124875124875,"sync":true}},"line_linked":{"enable":false,"distance":929.9789953020032,"color":"#ffffff","opacity":0.5291259800856225,"width":6.0929658312889865},"move":{"enable":true,"speed":5,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;




