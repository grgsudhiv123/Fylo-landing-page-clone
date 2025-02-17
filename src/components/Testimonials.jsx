import {Testimonial} from  "../constants/Constants"
import TestimonialCard from "./TestimonialCard"
import {icons} from "../constants/Constants" 

const Testimonials = () => {
  return (
        <section className="w-full h-auto bg-[#181e2a] pt-20 relative max-sm:pt-5">
          <div className="relative max-w-[1050px] h-auto mx-auto max-lg:max-w-[90%]">
          <img src={icons.quotes} alt="" className="w-5 max-sm:ml-10"/>
              <div className="relative max-w-[1024px] mx-auto flex flex-row justify-between max-sm:flex-col  p-3s gap-10  z-10  max-sm:gap-5 max-md:flex-wrap">
                {
                  Testimonial.map((items)=>(
                    <TestimonialCard key={items.name} {...items}/>
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials


