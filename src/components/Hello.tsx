import { useRef } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hello = () => {
  const container = useRef(null)
  const hello = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
    hello.current!.style.strokeDasharray = 166 + ' ' + 166;
    hello.current!.style.strokeDashoffset = "166";
    
    gsap.timeline({defaults: { duration: 0.2 },
        scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: "center center",
            end: "+=80%",
            pin: true,
        }})
        .from("#macintosh_1", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .from("#macintosh_2", {opacity: 0, scaleY: 0.5, transformOrigin: "50% 0%"})
        .from("#macintosh_3", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .from("#macintosh_4", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .from("#macintosh_5", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .from("#macintosh_6", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .from("#macintosh_7", {opacity: 0, scale: 0.8, transformOrigin: "50% 50%"})
        .to("#hello-macintosh", {duration: 1, strokeDashoffset: 0}, "text")
        .from("#hello-scene-txt", {duration: 1, opacity: 0, y: "+=10px"}, "text")
    },
    { scope: container }
  );
  return (
    <section className="section relative py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col md:flex-row items-center justify-center" ref={container}> 
      <svg id="macintosh"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 96.76 124.32"
           className="w-64"
      >
        <g id="pc">
            <rect id="macintosh_1" width="96.76" height="109.37" fill="#c7c2b3"/>
            <rect id="macintosh_2" y="102.04" width="96.76" height="22.28" fill="#b3b1a5"/>
            <rect id="macintosh_3" x="9.38" y="8.21" width="78.58" height="64.51" fill="#d6d3c9"/>
            <path id="macintosh_4" d="M263.42,373.73s34.19-4.41,68.9,0a382.17,382.17,0,0,1,0,52.77s-38.38,2.61-68.9,0C263.42,426.5,260.16,393.46,263.42,373.73Z" transform="translate(-249.34 -359.65)" fill="#515151"/>
            <rect id="macintosh_5" x="14.86" y="14.49" width="66.81" height="50.84" rx="5.39" fill="#7ecbdd"/>
            <g id="macintosh_6">
                <rect x="50.39" y="89.87" width="30.93" height="1.47" fill="#515151"/>
                <rect x="81.31" y="89.87" width="6.65" height="1.47" fill="#b3ac9d"/>
                <circle cx="83.03" cy="90.65" r="0.3" fill="#515151"/>
            </g>
            <g id="macintosh_7">
                <path d="M263.54,456.84a1.53,1.53,0,0,1-.26.34.58.58,0,0,1-.41.22.79.79,0,0,1-.4-.06.87.87,0,0,0-.4-.12.84.84,0,0,0-.38.12.72.72,0,0,1-.39.06.75.75,0,0,1-.36-.17,2.21,2.21,0,0,1-.36-.4Z" transform="translate(-249.34 -359.65)" fill="#2496d3" fillRule="evenodd"/>
                <path d="M260.16,454.54a1.16,1.16,0,0,1,.31-.41,1.27,1.27,0,0,1,1-.2,1.63,1.63,0,0,0,.5.16,1.66,1.66,0,0,0,.49-.15,1.33,1.33,0,0,1,1,.19,2.26,2.26,0,0,1,.22.22,1.92,1.92,0,0,0-.23.19Z" transform="translate(-249.34 -359.65)" fill="#9fc550" fillRule="evenodd"/>
                <path d="M263.43,454.54a.91.91,0,0,0-.13.19.85.85,0,0,0-.12.39H260a.31.31,0,0,1,0-.1,1.82,1.82,0,0,1,.13-.49Z" transform="translate(-249.34 -359.65)" fill="#f3e254" fillRule="evenodd"/>
                <path d="M263.18,455.12a.49.49,0,0,0,0,.17,1,1,0,0,0,.11.41h-3.21a1.85,1.85,0,0,1-.06-.56Z" transform="translate(-249.34 -359.65)" fill="#e09346" fillRule="evenodd"/>
                <path d="M263.29,455.7l.09.14a1,1,0,0,0,.47.36l0,.08h-3.56a4,4,0,0,1-.18-.58Z" transform="translate(-249.34 -359.65)" fill="#d45c43" fillRule="evenodd"/>
                <path d="M263.82,456.28a4.81,4.81,0,0,1-.28.56h-3a3.69,3.69,0,0,1-.29-.5l0-.06Z" transform="translate(-249.34 -359.65)" fill="#90569e" fillRule="evenodd"/>
                <path d="M262.79,453.2a.74.74,0,0,1-.18.38,2.32,2.32,0,0,1-.37.3,1,1,0,0,1-.31.05.48.48,0,0,1,0-.29,1.31,1.31,0,0,1,.18-.38.76.76,0,0,1,.29-.27,1.29,1.29,0,0,1,.36-.14A2,2,0,0,1,262.79,453.2Z" transform="translate(-249.34 -359.65)" fill="#9fc550" fillRule="evenodd"/>
            </g>
        </g>
        <g>
            <path id="hello-macintosh" ref={hello} d="M277,401.85s2.5-1.45,3.15-2a10.49,10.49,0,0,0,3.88-6c.14-.8.3-1.79-.3-2.3a1.84,1.84,0,0,0-2.38.21,1.91,1.91,0,0,0-.47,1.19c-.19,2.73-1.22,10.52-1.24,10.52s.15-1.06.63-3.25c.19-.89,2.17-2.78,2.82-2.8a1.85,1.85,0,0,1,1.62,1.15,2.29,2.29,0,0,1,0,1c-.19,1.64-.47,1.94-.3,2.64a1.94,1.94,0,0,0,.77,1.15,1.74,1.74,0,0,0,.94.21,6.71,6.71,0,0,0,2.43-.47,7.35,7.35,0,0,0,2.81-1.83,3.76,3.76,0,0,0,1-1.66,2.07,2.07,0,0,0-.17-1.83,1.8,1.8,0,0,0-1.92-.51,2.2,2.2,0,0,0-1.19,1.1,4,4,0,0,0-.38,2.64,2.85,2.85,0,0,0,.34,1.32,2.91,2.91,0,0,0,1.79,1.2,4.92,4.92,0,0,0,3.32-.26,6.07,6.07,0,0,0,1.7-1.15,15.13,15.13,0,0,0,4.05-5.54,12.36,12.36,0,0,0,.76-3.7,1.58,1.58,0,0,0-.29-1.28,1.47,1.47,0,0,0-1.54-.17,1.69,1.69,0,0,0-.72.68,13.8,13.8,0,0,0-1.45,4.64,15.4,15.4,0,0,0-.25,3.07,5.74,5.74,0,0,0,.55,2.56,2.81,2.81,0,0,0,1,1.27,3,3,0,0,0,2.6.09,4.68,4.68,0,0,0,.85-.55,21.76,21.76,0,0,0,1.92-1.49,11.57,11.57,0,0,0,2.21-3.07,22,22,0,0,0,1.2-2.51,9.43,9.43,0,0,0,.8-2.6c.12-.89.21-1.6-.25-2a1.56,1.56,0,0,0-1.79,0,2.11,2.11,0,0,0-.64.85,7.44,7.44,0,0,0-.64,1.7c-.13.49-.25,1-.38,1.7a19.62,19.62,0,0,0-.38,2.56,13.22,13.22,0,0,0,0,2.22,4.58,4.58,0,0,0,.51,2.21,2.87,2.87,0,0,0,2,1.15c1.58.07,2.58-1.46,2.82-1.83a12.85,12.85,0,0,0,.59-1.36c.7-1.52,1.07-2.34,1.92-2.86a3,3,0,0,1,2.39-.34,2.67,2.67,0,0,1,1.31,1,2.86,2.86,0,0,1,.39,1.11,4.15,4.15,0,0,1-1.11,3.45,2.94,2.94,0,0,1-2.3,1.07,2.71,2.71,0,0,1-1.79-1.2,2.8,2.8,0,0,1-.55-1.57,3.06,3.06,0,0,1,.28-1.28,3.93,3.93,0,0,1,1.42-2.05,3.35,3.35,0,0,1,3.53-.12,4.73,4.73,0,0,0,.42.34,5.55,5.55,0,0,0,.82.54,2.18,2.18,0,0,0,1.54.07,2.32,2.32,0,0,0,1.36-1.37" transform="translate(-249.34 -359.65)" fill="none" stroke="#282828" strokeLinecap="round" stroke-miterlimit="10" stroke-width="1.5"/>
        </g>
      </svg>
      <div>
        <p className="mt-6 text-xl text-gray-800" id="hello-scene-txt">
          Hola! Me llamo Lluís Mendoza
        </p>
      </div>
    </section>
  )
}
export default Hello