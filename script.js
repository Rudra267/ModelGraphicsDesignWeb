
var tl = gsap.timeline()

gsap.from('#elem3 .left ',{
    x:-100,
    duration:1,
    delay:0.3,
    stagger:0.5,
    opacity:0
},"anime")

gsap.from('#elem3 .right ',{
    x:600,
    duration:1,
    delay:0.3,
    stagger:0.5,
    opacity:0
},"anime")


gsap.from('#elem4 p ',{
    y:80,
    duration:1,
    delay:1,
    opacity:0
})


var cursor = document.querySelector(".cursor")

document.querySelector('body').addEventListener('mousemove',(dets)=>{
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y
    })
})

tl.to('.mobile-menu',{
    backgroundColor: "#fffbfb",
    right:"0%",
    duration:0.4,
    delay:0.2,
},"open")
tl.from('.mobile-menu h2',{
    x:100,
    duration:0.3,
    delay:0.4,
    stagger:0.3,
    opacity:0
})
tl.to('.menu-options i',{
    duration:0.1,
    delay:0.1,
    opacity:0,
    ease:"bounce-out"
},"open")

tl.pause()

document.querySelector('.menu-options i').addEventListener('click',()=>{
   tl.play()
})
document.querySelector('#close').addEventListener('click',()=>{
    tl.reverse();
})

var t2 = gsap.timeline()
var t3 = gsap.timeline()

t2.to('.cursor',{
    scale:2,
    background: "yellow",
})

t2.pause()

t3.to('.cursor',{
  padding:"400%",
  duration:2,
  ease: "sine.inOut",
})

t3.pause()

document.querySelector('#elem5 video').addEventListener('mouseenter',()=>{
    cursor.innerHTML = "<h5>Press Here</h5>"
    t2.play()
})
document.querySelector('#elem5 video').addEventListener('mouseout',()=>{
    cursor.innerHTML = ""
    t2.reverse()
})

document.querySelector('#elem5 video').addEventListener('mousedown',()=>{
    
    t3.play()
    
})

document.querySelector('#elem5 video').addEventListener('mouseup',()=>{
    
    t3.reverse()
    
})
