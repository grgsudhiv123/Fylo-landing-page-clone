import {ServicesData} from "../constants/Constants"
import ServiceComponent from "../components/ServiceComponent"

const Services = () => {
  return (
    <section className="w-full h-auto bg-[#181e2a] pt-24 pb-10 max-sm:pb-5 max-md:pt-16 max-sm:pt-10 ">
      <div className="max-w-screen-lg max-md:w-sm mx-auto grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
        {
          ServicesData.map((items)=>(
            <ServiceComponent key={items.img} {...items}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services