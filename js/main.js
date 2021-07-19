gsap.registerPlugin(ScrollTrigger);
  
var ww = document.documentElement.clientWidth;
var wh = document.documentElement.clientHeight;

// ===== CURSOR =====
/*
let lastX = 0;
let lastY = 0;
let clientX = -100;
let clientY = -100;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
});
const initHovers = () => {

    // find the center of the link element and set stuckX and stuckY
    // these are needed to set the position of the noisy circle
    const handleMouseEnter = e => {
      const navItem = e.currentTarget;
      const navItemBox = navItem.getBoundingClientRect();
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
      isStuck = true;
    };
    
    // reset isStuck on mouseLeave
    const handleMouseLeave = () => {
      isStuck = false;
    };
    
    // add event listeners to all items
    const linkItems = document.querySelectorAll(".nav-link");
    linkItems.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
  };
  
initHovers();
const initCanvas = () => {
  const canvas = document.querySelector(".cursor");
  const shapeBounds = {
    width: 75,
    height: 75
  };
  paper.setup(canvas);
  const strokeColor = "rgba(255, 0, 0, 0.7)";
  const strokeWidth = 3;
  const segments = 8;
  const radius = 30;
  
  // we'll need these later for the noisy circle
  const noiseScale = 150; // speed
  const noiseRange = 4; // range of distortion
  let isNoisy = false; // state
  
  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;
  
  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];
  
  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };
  
  // function to map a value from one range to another range
  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };
  
  // the draw loop of Paper.js 
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    if (!isStuck) {
      // move circle around normally
      lastX = lerp(lastX, clientX, 0.2);
      lastY = lerp(lastY, clientY, 0.2);
      group.position = new paper.Point(lastX, lastY);
    } else if (isStuck) {
      // fixed position on a nav item
      lastX = lerp(lastX, stuckX, 0.2);
      lastY = lerp(lastY, stuckY, 0.2);
      group.position = new paper.Point(lastX, lastY);
    }
    
    if (isStuck && polygon.bounds.width < shapeBounds.width) { 
      // scale up the shape 
      polygon.scale(1.08);
    } else if (!isStuck && polygon.bounds.width > 30) {
      // remove noise
      if (isNoisy) {
        polygon.segments.forEach((segment, i) => {
          segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
        });
        isNoisy = false;
        bigCoordinates = [];
      }
      // scale down the shape
      const scaleDown = 0.92;
      polygon.scale(scaleDown);
    }
    
    // while stuck and big, apply simplex noise
    if (isStuck && polygon.bounds.width >= shapeBounds.width) {
      isNoisy = true;
      // first get coordinates of large circle
      if (bigCoordinates.length === 0) {
        polygon.segments.forEach((segment, i) => {
          bigCoordinates[i] = [segment.point.x, segment.point.y];
        });
      }
      
      // loop over all points of the polygon
      polygon.segments.forEach((segment, i) => {
        
        // get new noise value
        // we divide event.count by noiseScale to get a very smooth value
        const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
        const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
        
        // map the noise value to our defined range
        const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
        const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
        
        // apply distortion to coordinates
        const newX = bigCoordinates[i][0] + distortionX;
        const newY = bigCoordinates[i][1] + distortionY;
        
        // set new (noisy) coodrindate of point
        segment.point.set(newX, newY);
      });
      
    }
    polygon.smooth();
  };
}

initCanvas();
*/
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


var barcelona = document.querySelector('#barcelona-path');
var barcelonaLength = barcelona.getTotalLength();
barcelona.style.strokeDasharray = barcelonaLength + ' ' + barcelonaLength;
barcelona.style.strokeDashoffset = barcelonaLength;
barcelona.getBoundingClientRect();

gsap.timeline({
    scrollTrigger: {
        trigger: "#barcelona",
        start: "top top",
        end: "+=" + (wh*3),
        pin: true,
        scrub: 1,
        snap:1,
    }})
    .to("#skyline1",{y: "20%"}, 0)
    .to("#skyline2",{y: "15%"}, 0)
    .to("#skyline3",{y: "10%"}, 0)
    .to("#skyline4",{y: "5%"}, 0)
    .to("#barcelona-path",{ease: Power4.easeOut,strokeDashoffset: 1}, 0)

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
        end: "+=" + (frame_count4 * ww/20),
        pin: true,
        scrub: 1,
    }})
    .to("#viewer-pc",{ease: "steps(" + frame_count4 + ")", backgroundPosition: "0 "+ (-pc_h*frame_count4)}, 0)