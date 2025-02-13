
import Navbar from "../components/Navbar.jsx"
import HeroComponents from "../components/HeroComponents.jsx"

const Hero = () => {
  return (
    <section className="w-full h-auto top-0 bg-[#202434] bg-[url('./assets/images/bg-curvy-desktop.svg')] bg-contain bg-no-repeat bg-bottom" >
      <Navbar/>
      <HeroComponents />
  </section>
  )
}

export default Hero