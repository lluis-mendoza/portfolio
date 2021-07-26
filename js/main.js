gsap.registerPlugin(ScrollTrigger);
  
var ww = document.documentElement.clientWidth;
var wh = document.documentElement.clientHeight;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', function () { 
  if (document.documentElement.clientWidth != ww){
    window.location.reload(); 
  }
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `$vh}px`);
});

// ===== NAV BAR =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ===== HOME =====

var home = document.getElementById('home-parallax');
var home_parallax = new Parallax(home);

gsap.from(".name-wrapper",{
    opacity:0,
    x: "-80%",
    duration: 1
});

gsap.to(".scroll", {
    opacity: 0,
    y: "+=40",
    scrollTrigger: {
        trigger: ".scroll",
        start: "top 70%",
        toggleActions: "restart none none reverse",
    }
});

// ===== ABOUT =====

var barcelona = document.querySelector('#barcelona-path');
var barcelonaLength = barcelona.getTotalLength();
barcelona.style.strokeDasharray = barcelonaLength + ' ' + barcelonaLength;
barcelona.style.strokeDashoffset = barcelonaLength;
barcelona.getBoundingClientRect();

gsap.timeline({
    defaults:{
        duration: 1,
    },
    scrollTrigger: {
        trigger: "#barcelona",
        start: "top top",
        end: "+=" + (wh*5),
        pin: true,
        scrub: 1,
    }})
    .to("#skyline1",{y: "20%"}, 0)
    .to("#skyline2",{y: "15%"}, 0)
    .to("#skyline3",{y: "10%"}, 0)
    .to("#skyline4",{y: "5%"}, 0)
    .to("#barcelona-path",{ease: Power4.easeOut,strokeDashoffset: 1}, 0)
    .to("#viewer-stork",{duration: 0.3, repeat: 3, ease: "steps(" + 3 + ")", backgroundPosition: (-document.getElementById('viewer-stork').offsetWidth*3) + "px 0"}, 0)
    .to("#viewer-stork",{x: "100vw"}, 0)
    .to("#little-lluis",{ duration:0.5, x: "55vw"}, 0)
    .to("#little-lluis",{duration: 0.45, y: "40vh"}, 0.2)
    .to("#little-lluis",{duration: 0.01, opacity: 0}, 0.6)
    var line = document.querySelector('#tml-line');
    var lineLength = line.getTotalLength();
    line.style.strokeDasharray = lineLength + ' ' + lineLength;
    line.style.strokeDashoffset = lineLength;
    line.getBoundingClientRect();
    
var tml = gsap.timeline({
    defaults: {
        duration: 0.05, 
        autoAlpha: 1, 
        scale: 1.5, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
    }})
    .to("#tml-ball1, #tml-text1", {}, 0.15) 
    .to("#tml-ball2, #tml-text2", {}, 0.22)
    .to("#tml-ball3, #tml-text3", {}, 0.33)
    .to("#tml-ball4, #tml-text4", {}, 0.47)
gsap.set("#tml-dot", {xPercent: -50, yPercent: -50})
gsap.timeline({defaults: {duration: 1},
    scrollTrigger: {
        trigger: "#studies",
        scrub: 1,
        pin:true,
        end: "+=" + (wh*4),
        start: "top top",
    }})
    .to("#tml-dot", {duration: 0.01, autoAlpha: 1}, 0)
    .to("#tml-line", {strokeDashoffset: 1}, 0)
    .to("#tml-dot", {motionPath: {path: "#tml-line", alignOrigin: [0.5, 0.5]}}, 0)
    .from("#logo-fib", {ease: "elastic.out(1, 0.3)", height: 0, width: 0})
    .add(tml, 0);

var frame_count  = 44,
    frame_count2 = 9;
    frame_count3 = 67;
    frame_count4 = 29;
    
    king_h = document.getElementById('viewer-king').offsetHeight;
    king_w = document.getElementById('viewer-king').offsetWidth;
    horse_h = document.getElementById('viewer-horse').offsetHeight;
    horse_w = document.getElementById('viewer-horse').offsetWidth;
    ball_h = document.getElementById('viewer-ball').offsetHeight;
    ball_w = document.getElementById('viewer-ball').offsetWidth;
    racquet_h = document.getElementById('viewer-racquet').offsetHeight;
    racquet_w = document.getElementById('viewer-racquet').offsetWidth;
    book_h = document.getElementById('viewer-book').offsetHeight;
    book_w = document.getElementById('viewer-book').offsetWidth;
    pc_h = document.getElementById('viewer-pc').offsetHeight;
    pc_w = document.getElementById('viewer-pc').offsetWidth;

gsap.timeline({
    scrollTrigger: {
        trigger: "#chess-scene",
        start: "top top",
        end: "+=" + (frame_count * ww/20),
        pin: true,
        scrub: 1,
    }})
    .to("#viewer-king",{ease: "steps(" + frame_count + ")", backgroundPosition: "0 "+ (-king_h*frame_count)}, 0)
    .to("#viewer-king",{x: (ww-king_w),y: "20vh"}, 0)
    .from("#chess-text",{opacity:0, y: "-5vw"}, 0)
    .to("#viewer-horse",{x: "0",y: "-40%"}, 0)
    .to("#viewer-horse",{ease: "steps(" + frame_count + ")", backgroundPosition: "0 "+ (-horse_h*frame_count)}, 0)
    

gsap.timeline({
    scrollTrigger: {
        trigger: "#paddel-scene",
        start: "top top",
        end: "+=" + (frame_count2 * ww/5),
        pin: true,
        scrub: 1,
    }})
    .to("#viewer-racquet",{duration: 0.15, ease: "steps(" + frame_count2 + ")", backgroundPosition: "0 "+ (-racquet_h*frame_count2)}, 0)
    .from("#paddel-text",{opacity:0, y: "-5vw"}, 0)
    .to("#viewer-ball",{ease: "steps(" + frame_count2 + ")", backgroundPosition: "0 "+ (-ball_h*frame_count2)}, 0)
    .to("#viewer-ball",{ duration:1,x:"100vw"}, 0)

gsap.timeline({
    scrollTrigger: {
        trigger: "#book-scene",
        start: "top top",
        end: "+=" + (frame_count3 * ww/20),
        pin: true,
        scrub: 1,
    }})
    .to("#viewer-book",{ease: "steps(" + frame_count3 + ")", backgroundPosition: "0 "+ (-book_h*frame_count3)}, 0)

// ===== SKILLS =====

gsap.timeline({
    scrollTrigger: {
        trigger: "#pc-scene",
        start: "top top",
        end: "bottom center",
        pin: true,
        scrub: 1,
    }})
    .to("#viewer-pc",{ease: "steps(" + frame_count4 + ")", backgroundPosition: "0 "+ (-pc_h*frame_count4)}, 0)

gsap.timeline({
    scrollTrigger: {
        trigger: "#dev-soft",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
    }})
    .to("#cplusplus",{duration: 0.2, backgroundPosition: "bottom right"},0.2)
    .to("#java",{duration: 0.2, backgroundPosition: "bottom right"})
    .to("#python",{duration: 0.2, backgroundPosition: "bottom right"})

gsap.timeline({
    scrollTrigger: {
        trigger: "#dev-web",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
    }})
    .to("#html5",{duration: 0.2, backgroundPosition: "bottom right"},0.2)
    .to("#css3",{duration: 0.2, backgroundPosition: "bottom right"})
    .to("#js",{duration: 0.2, backgroundPosition: "bottom right"})
    .to("#react",{duration: 0.2, backgroundPosition: "bottom right"})

gsap.timeline({
    scrollTrigger: {
        trigger: "#dev-mobile",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
    }})
    .to("#kotlin",{duration: 0.2, backgroundPosition: "bottom right"},0.2)

gsap.timeline({
    scrollTrigger: {
        trigger: "#dev-tools",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
    }})
    .to("#git",{duration: 0.2, backgroundPosition: "bottom right"},0.2)
    .to("#bash",{duration: 0.2, backgroundPosition: "bottom right"})
    .to("#mongo",{duration: 0.2, backgroundPosition: "bottom right"})