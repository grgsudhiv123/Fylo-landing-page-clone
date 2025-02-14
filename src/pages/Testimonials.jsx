import {Testimonial} from  "../constants/Constants"
import TestimonialCard from "../components/TestimonialCard"
import {icons} from "../constants/Constants" 

const Testimonials = () => {
  return (
        <section className="w-full h-auto bg-[#181e2a] pt-20 relative">
          <div className="relative max-w-[1050px] h-auto mx-auto">
          <div className="absolute top-0">
          <img src={icons.quotes} alt="" />
          </div>
              <div className="relative max-w-[1024px] mx-auto flex flex-row justify-between p-3s gap-10 mt-20 z-10">
                {
                  Testimonial.map((items)=>(
                    <TestimonialCard key={items.img} {...items}/>
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials


