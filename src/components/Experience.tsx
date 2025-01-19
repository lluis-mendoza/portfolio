import { useRef } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
    {
        title: "Studies"

    },
    {
        title: "Studies"
    }
]
const Experience = () => {
  const container = useRef(null)

  useGSAP(
    () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: "top center",
                end: "100% center",
                pin: "#dot",
            }
        })
        .from("#line", { height: 0, ease: "none"})

        const items = gsap.utils.toArray('.experience') as gsap.TweenTarget[];
        items.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                scrollTrigger: {
                    trigger: item as gsap.DOMTarget,
                    start: 'top center',
                    end: 'end center',
                    scrub: true,
                },
            });
      });
    },
    { scope: container }
  );
  return (
    <section id="experience" className="section relative py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col md:flex-row items-center justify-center"> 
        <div className="relative" ref={container}>
            <div id="dot" className="absolute z-10 size-8 bg-red-400 rounded-full"/>
            <div id="line" className="absolute h-full w-[2px] left-4 bg-gray-300 -translate-x-1/2"/>
            
            <ol className="relative pt-16">
                {
                    experiences.map(experience => (
                    <li className="relative experience">
                        <div className="absolute top-0 size-8 bg-red-400 rounded-full"/>
                        <div className="relative ml-20 pb-12 grid md:grid-cols-5 md:gap-10 md:space-x-4]">
                            <div className="relative pb-12 md:col-span-2">
                                <div className="sticky top-0">
                                    <h3 className="text-2xl font-bold text-red-400">Creador de Contenido</h3>
                                    <h4 className="font-semibold text-xl text-gray-600">Twitch</h4>
                                    <time className="p-0 m-0 text-sm text-gray-600/80">Actualmente...</time>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3"> Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.</div>
                        </div>
                    </li >
                    ))
                }
            </ol>
        </div>
    </section>
  )
}
export default Experience