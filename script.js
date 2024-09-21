var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+20+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left =dets.x-250+"px"
    blur.style.top=dets.y-250+"px"
})

// var slide= document.querySelectorAll("#slide h1")
// var image= document.querySelector("#menu")
// slide.forEach(function(slay){
//     slay.addEventListener("mouseclick",function(){
//         crsr.style.scale = 4
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//         slay.style.color = "#95C11E"
//         image.style.background= "url(hero-4.avif)"
        
//     })
// })


var h5all = document.querySelectorAll("#nav img,h5")
    h5all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        // crsr.style.duration = 2
        // crsr.style.transition = "all ease 0.2s"
        crsr.style.backgroundColor = "transparent"
        elem.style.color = "#95C11E"
    })        
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
        elem.style.color = "#fff"
    })      
});

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "120px",
    durattion : 0.5,
    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        // markers:true,
        start: "top -10%",
        end : "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    // y:50,
    opacity:0,
    duration:1,
    // stragger:0.1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
 
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})