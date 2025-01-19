import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "test"
  },
  {
    title: "test"
  }
]
const Projects = () => {
  const container = useRef(null)
  
  useGSAP(
    () => {
        const items = gsap.utils.toArray('.project') as gsap.TweenTarget[];
        items.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                scrollTrigger: {
                    trigger: item as gsap.DOMTarget,
                    start: 'top center',
                    end: '30 center',
                    scrub: true,
                    markers: true
                },
            });
      });
    },
    { scope: container }
  );
  return (
    <section className="section relative py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col gap-y-16" ref={container}>
        {
          projects.map(project => (
            <article className="project flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img alt="Recién llegado vs 5 años en Nueva Zelanda" className="object-cover aspect-video object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src="/projects/svgl.webp" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800"> SVGL - A beautiful library with SVG logos </h3>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
export default Projects