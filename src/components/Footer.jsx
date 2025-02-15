import {brandLOgo} from "../constants/Constants"
import {icons} from "../constants/Constants"

const Footer = () => {
  return (
    <footer className="pt-40 max-w-[1300px] mx-auto">
      <div className="flex flex-col justify-start h-auto">
        <div className="flex-1 bg-slate-800">
          <img src={brandLOgo.logo} alt="brand logo" className="w-32 object-contain bg-cover" />
        </div>
        <div className="flex flex-1 w-full gap-3 mt-10">
          <div className="flex-1 flex flex-row gap-4 p-2">
          <img src={icons.location} alt="location" className="object-contain bg-cover w-5 h-4 mt-2" />
          <p className="text-sm font-montserrat text-balanced text-slate-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto adipisci neque corrupti quas ,</p>
          </div>
          <div className="flex-1 bg-neutral-400 gap-3 p-2">
            <div className="flex"></div>
            <div className="flex"></div>
          </div>
          <div className="flex-1 bg-neutral-400">
          box-1
          </div>
          <div className="flex-1 bg-neutral-400">
          box-1
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer