import {ServicesData} from "../constants/Constants"
import ServiceComponent from "../components/ServiceComponent"

const Services = () => {
  return (
    <section className="w-full h-auto bg-[#181e2a] pt-24">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2">
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