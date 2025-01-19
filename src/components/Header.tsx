import { useEffect } from "react";

const navItems = [
  {
    title: "About me",
    label: "about me",
    url: "/#about-me",
  },
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:miduga@gmail.com",
  },
]

const Header = () => {

   useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("header nav a");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("aria-label") === entry.target.id) {
              item.classList.add("text-blue-500");
            } else {
              item.classList.remove("text-blue-500");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <header
        className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
        >
        <nav
            className="flex px-3 text-sm font-medium rounded-full text-gray-600 justify-center items-center"
        >
            {
            navItems.map((link) => (
                <a
                className="relative block px-2 py-2 transition hover:text-blue-500"
                aria-label={link.label}
                href={link.url}
                >
                {link.title}
                </a>
            ))
            }
        </nav>
    </header>
  )
}
export default Header