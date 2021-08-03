gsap.registerPlugin(ScrollTrigger);
  
var ww = document.documentElement.clientWidth;
var wh = document.documentElement.clientHeight;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', function () { 
  /*if (document.documentElement.clientWidth != ww){
    window.location.reload(); 
  }*/
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

var lineMac = document.querySelector('#hello-macintosh');
lineMac.style.strokeDasharray = 166 + ' ' + 166;
lineMac.style.strokeDashoffset = 166;

gsap.timeline({defaults: {duration: 1},
    defaults:{
        ease: "none"
    },
    scrollTrigger: {
        trigger: "#hello-scene",
        scrub: 1,
        end: "+=" + (wh*2),
        start: "top center",
    }})
    .from("#macintosh_1", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .from("#macintosh_2", {opacity: 0, scaleY: 0.5, transformOrigin: "50% 0%"})
    .from("#macintosh_3", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .from("#macintosh_4", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .from("#macintosh_5", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .from("#macintosh_6", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .from("#macintosh_7", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
    .to("#hello-macintosh", {strokeDashoffset: 0})
    .from("#hello-scene-txt", {opacity: 0, y: "+=10px"})
    //.to({}, {duration: 2})
ScrollTrigger.create({
    trigger: "#hello-scene",
    start: "top top",
    end: "+=" + (wh*2),
    pin:true
    });
gsap.timeline({
    defaults:{
        ease: Power4.easeInOut
    },
    scrollTrigger: {
        trigger: "#barcelona-scene",
        start: "center center",
        end: "+=" + (wh*2),
        pin: true,
        scrub: 1
    }})
    .from("#skyline-rect",{duration: 0.2,scaleX: 0.054,transformOrigin: "0% 50%"}, 0)
    .to("#skyline_1",{duration: 0.1, y: "0"}, 0.15)
    .to("#skyline_2",{duration: 0.2, y: "0"}, 0.15)
    .to("#skyline_3",{duration: 0.15, y: "0"}, 0.3)
    .to("#skyline_4",{duration: 0.2, y: "0"}, 0.35)
    .from("#barcelona-scene-txt", {opacity: 0, y: "+=10px"})
    .to({}, {duration: 2})

    
var line = document.querySelector('#tml-line');
line.style.strokeDasharray = 663 + ' ' + 663;
line.style.strokeDashoffset = 663;

var tml_ball = gsap.timeline({
    defaults: {
        duration: 0.05, 
        autoAlpha: 1, 
        scale: 1.5, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
    }})
    .to("#tml-ball1", {}, 0.1) 
    .to("#tml-ball2", {}, 0.2)
    .to("#tml-ball3", {}, 0.3)
    .to("#tml-ball4", {}, 0.4)
    .to("#tml-ball5", {}, 0.5)

var tml_box = gsap.timeline({
    defaults: {
        duration: 0.05, 
        opacity: 0, 
        scale: 0.8, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
    }})
    .from("#tml-box-1, #tml-icon-1", {}, 0.1) 
    .from("#tml-box-2, #tml-icon-2", {}, 0.2)
    .from("#tml-box-3, #tml-icon-3", {}, 0.3)
    .from("#tml-box-4, #tml-icon-4", {}, 0.4)
    .from("#tml-box-5, #tml-icon-5", {}, 0.5)
//gsap.set("#tml-dot", {xPercent: -100, yPercent: -50})

gsap.timeline({defaults: {duration: 1},
    defaults:{
        ease: "none"
    },
    scrollTrigger: {
        trigger: "#studies",
        scrub: 1,
        end: "bottom center",
        start: "top center",
    }})
    .to("#tml-line", {strokeDashoffset: 1}, 0)
    .to("#tml-dot", {motionPath: {path: "#tml-line", align:"#tml-line",
    alignOrigin: [0.5, 0.5]}}, 0)
    //.from("#logo-fib", {ease: "elastic.out(1, 0.3)", height: 0, width: 0})
    .add(tml_box, 0)
    .add(tml_ball, 0);

var horse_animation = gsap.timeline({
    defaults:{
        scale: 0,
        duration: 0.2
    }})
    .from("#horse_2", {})
    .from("#horse_3", {transformOrigin: "100% 0%"})
    .from("#horse_4", {transformOrigin: "100% 100%"})
    .from("#horse_5", {transformOrigin: "0% 100%"})
    .from("#horse_6", {transformOrigin: "50% 0%"})
    .from("#horse_7", {transformOrigin: "50% 0%"})
    .from("#horse_8", {transformOrigin: "100% 100%"})
    .from("#horse_9", {transformOrigin: "0% 50%"})
    .from("#horse_10", {transformOrigin: "50% 100%"})
    .from("#horse_11", {transformOrigin: "100% 100%"})
    .from("#horse_12", {transformOrigin: "100% 50%"})
    .from("#horse_13", {transformOrigin: "50% 100%"})
    .from("#horse_14", {transformOrigin: "100% 50%"})
    .from("#horse_15", {transformOrigin: "100% 50%"})
    .from("#horse_16", {transformOrigin: "0% 0%"})
    .from("#horse_17", {transformOrigin: "100% 50%"})
    .from("#horse_18", {transformOrigin: "100% 50%"})
    .from("#horse_19", {transformOrigin: "100% 50%"})
    .from("#horse_20", {transformOrigin: "0% 100%"})
    .from("#horse_21", {transformOrigin: "0% 50%"})
    .from("#horse_22", {transformOrigin: "0% 50%"})
    .from("#horse_23", {transformOrigin: "0% 50%"})
    .from("#horse_24", {transformOrigin: "0% 0%"})
    .from("#horse_25", {transformOrigin: "0% 0%"})
    .from("#horse_26", {transformOrigin: "0% 0%"})
    .from("#horse_27", {transformOrigin: "0% 50%"})

gsap.timeline({
    scrollTrigger: {
        trigger: "#chess-scene",
        scrub: 1,
        pin:true,
        end: "+=" + (wh*2),
        start: "top top",
    }})
    .add(horse_animation, 0)
    .to({}, {duration: 2})

var paddel_ball = gsap.timeline({

    })
    .to("#paddel-ball", {transformOrigin: "50% 50%",y: "+=40vh",ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 100%",scaleX: 1.3,scaleY: 0.6,ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 50%",scaleX: 1,scaleY: 1,y: "-=35vh",ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 50%",y: "+=35vh",ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 100%",scaleX: 1.2,scaleY: 0.8,ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 50%",scaleX: 1,scaleY: 1,y: "-=25vh",ease: Power1.easeInOut})
    .to("#paddel-ball", {transformOrigin: "50% 50%",y: "+=25vh"})
    
    
gsap.timeline({
    scrollTrigger: {
        trigger: "#paddel-scene",
        scrub: 1,
        pin:true,
        end: "+=" + (wh),
        start: "top top",
    }})
    .from("#paddel_1, #paddel_2", {duration:0.2,scale: 0, transformOrigin: "0% 0%"},0)
    .from("#paddel_3", {duration:0.2,scale: 0, transformOrigin: "35% 0%"},0.2)
    .from("#paddel_4", {duration:0.2,scale: 0, transformOrigin: "20% 0%"},0.4)
    .from("#paddel_5", {duration:0.2,scale: 0, transformOrigin: "20% 0%"},0.6)
    .to("#paddel-rect",{duration:0.5,ease: "steps(10)", x:"+=64%"}, 0.4)
    .add(paddel_ball, 0)
    .to({}, {duration: 2})

gsap.timeline({
    scrollTrigger: {
        trigger: "#book-scene",
        scrub: 1,
        pin:true,
        end: "+=" + (2*wh),
        start: "top top",
    }})
    .from("#book_1", {duration: 0.1, autoAlpha: 0}, 0)
    .from("#book_1", {duration: 0.1, scale: 0.8, transformOrigin: "50% 100%", ease: "power1.in"}, 0)
    .to("#book_1", {duration: 1, x: "-=400%"},0.1)
    .to("#book_1", {rotate: -30, duration: 0.1, transformOrigin: "0% 100%"}, 0.3)
    .to("#book_1", {rotate: -70, duration: 0.1, transformOrigin: "0% 100%"}, 0.7)
    .to("#book_1", {rotate: -90, duration: 0.1, transformOrigin: "0% 100%"}, 0.8)
    .to("#book_1", {duration: 0.3, opacity: 0}, 0.9)
    .from("#book_2", {duration: 0.1, autoAlpha: 0}, 0.25)
    .from("#book_2", {duration: 0.1, scale: 0.8, transformOrigin: "50% 100%", ease: "power1.in"}, 0.25)
    .to("#book_2", {duration: 1, x: "-=250%"},0.31)
    .to("#book_2", {rotate: -30, duration: 0.1, transformOrigin: "0% 100%"}, 0.5)
    .to("#book_2", {rotate: -43, duration: 0.1, transformOrigin: "0% 100%"}, 0.7)
    .to("#book_2", {rotate: -90, duration: 0.1, transformOrigin: "0% 100%"}, 0.9)
    .to("#book_2", {duration: 0.3, opacity: 0}, 1.1)
    .from("#book_3", {duration: 0.1, autoAlpha: 0},0.5)
    .from("#book_3", {duration: 0.1, scale: 0.8, transformOrigin: "50% 100%", ease: "power1.in"}, 0.5)
    .to("#book_3", {duration: 1.4, x: "-=300%"},0.55)
    .to("#book_3", {rotate: -32, duration: 0.1, transformOrigin: "0% 100%"},0.6)
    .to("#book_3", {rotate: -34, duration: 0.1, transformOrigin: "0% 100%"},0.7)
    .to("#book_3", {rotate: -48, duration: 0.1, transformOrigin: "0% 100%"}, 0.9)
    .to("#book_3", {rotate: -90, duration: 0.1, transformOrigin: "0% 100%"}, 1.2)
    .to("#book_3", {duration: 0.3, opacity: 0}, 1.35)
    .from("#book_4", {duration: 0.1, autoAlpha: 0}, 0.8)
    .from("#book_4", {duration: 0.1, scale: 0.8, transformOrigin: "50% 100%", ease: "power1.in"}, 0.8)
    .to("#book_4", {duration: 1.6, x: "-=170%"},0.9)
    .to("#book_4", {rotate: -40, duration: 0.1, transformOrigin: "0% 100%"}, 0.9)
    .to("#book_4", {rotate: -56, duration: 0.1, transformOrigin: "0% 100%"}, 1.2)
    .to("#book_4", {rotate: -90, duration: 0.1, transformOrigin: "0% 100%"}, 1.5)
    .to("#book_4", {duration: 0.3, opacity: 0}, 1.6)

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

gsap.timeline({
    scrollTrigger: {
        trigger: "#paperplane",
        start: "top bottom",
        end: "center center",
        scrub: 1,
    }})
    .to({}, {duration: 2})
    .to("#paperplane_1",{ duration:1, skewY: -10, skewX: -10, transformOrigin:"100% 0%"})
    .from("#paperplane_2",{ duration:1,  scaleY: 0,  transformOrigin:"75% 50%"})
    .from("#paperplane_3, #paperplane_4",{ duration:1,  scaleY: 0,  transformOrigin:"25% 0%"})
    //.to("#paperplane_3",{ duration:1,  scaleX: 0.85, skewX: 0, skewY: -10,transformOrigin:"100% 0%"}, "split")

const navLinks = document.getElementsByClassName('nav-link');

const panels = gsap.utils.toArray(".section");

panels.forEach((panel, i) => {
    ScrollTrigger.create({
    trigger: panel,
    start:"top center",
    end:"bottom center",
    onEnter: () => {
        if (i > 0){
            console.log(navLinks);
            navLinks[i-1].classList.add("nav-link-active");
            if(i > 1) navLinks[i-2].classList.remove("nav-link-active");
        }
    },
    onEnterBack: () => {
        if (i > 0){
            navLinks[i-1].classList.add("nav-link-active");
        }
        if (i < 4) navLinks[i].classList.remove("nav-link-active");
    },
    })
});