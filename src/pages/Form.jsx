import FormInput from "../components/FormInput"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"

const Form = () => {
  return (
    <section className="relative w-full h-auto bg-[#181e2a]">
      <div className="relative w-full pb-60 max-sm:pb-44">
        <Testimonials />
      </div>

      {/* Middle content */}
      {/* Positioning: absolute with left-1/2 and top-1/2 moves the center of the element to the center of the parent.
          Transform: -translate-x-1/2 -translate-y-1/2 ensures the element is fully centered.
          z-10: Ensures the middle content overlays the two divs. 
          */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#273247] p-10 max-sm:p-2 z-10 flex flex-col items-center justify-center gap-7 max-sm:gap-3 rounded-md xl:max-w-[800px] max-w-[800px] max-sm:w-[70%] max-md:w-[500px] lg:max-w-[700px] ">
        <h1 className="text-slate-200 font-palanquin font-bold text-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-center">
          Get early access today
        </h1>
        <p className="text-slate-200 font-montserrat font-light text-md text-center max-sm:text-xs max-md:text-sm max-lg:text-md">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions our support team will be happy to help you.
        </p>
        <FormInput />
      </div>

      <div className="relative w-full bg-[#202434] h-auto pb-16 pt-64 max-sm:pb-8 max-sm:pt-44 ">
          <Footer />
      </div>
    </section>

  )
}

export default Form