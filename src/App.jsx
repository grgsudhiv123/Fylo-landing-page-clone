import Hero from "./pages/Hero.jsx"
import Services from "./pages/Services.jsx"
import StayProductive from "./pages/StayProductive.jsx"
import Testimonials from "./pages/Testimonials.jsx"
import Form from "./pages/Form.jsx"
// import {bgImages} from "./constants/Constants.jsx"



const App = () => {

  return (
    <>
      <main className="p-0 m-0 overflow-x-hidden bg-[#181e2a]" >
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
      </main>
    </>
  )
}

export default App
