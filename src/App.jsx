import Hero from "./pages/Hero.jsx"
import Services from "./pages/Services.jsx"
import StayProductive from "./pages/StayProductive.jsx"
import Testimonials from "./pages/Testimonials.jsx"
import Form from "./pages/Form.jsx"
import Footer from "./pages/Footer.jsx"
// import {bgImages} from "./constants/Constants.jsx"



const App = () => {

  return (
    <>
      <main className="w-full h-auto bg-theme " >
        <section>
          <Hero />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <StayProductive />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Form />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
