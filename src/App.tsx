import Barcelona from "./components/Barcelona"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hello from "./components/Hello"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Header />
      <main className="px-5">
        <Hero />
        <Hello />
        <Barcelona />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
