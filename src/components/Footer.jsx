import {brandLOgo} from "../constants/Constants"
import {icons} from "../constants/Constants"
import {socialMedia} from "../constants/Constants"
 
const Footer = () => {
  return (
    <footer className="pt-40 max-w-[1300px] mx-auto">
      <div className="flex flex-col justify-start h-auto">
        <div className="flex-1">
          <img src={brandLOgo.logo} alt="brand logo" className="w-32 object-contain bg-cover" />
        </div>


        <div className="flex flex-1 w-full gap-3 mt-10">
          <div className="flex-1 flex flex-row gap-4 p-2 cursor-pointer">
          <img src={icons.location} alt="location" className="object-contain bg-cover w-6 h-4 mt-2" />
          <p className="text-sm font-montserrat text-balanced text-slate-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto adipisci neque corrupti quas ,</p>
          </div>



          <div className="flex flex-col flex-1 gap-5 p-2 cursor-pointer">
            <div className="flex gap-4 justify-center items-center">
              <img src={icons.phone} alt="email" className="object-contain bg-cover w-5 h-3 mt-2" />
              <p className="text-sm font-montserrat text-balanced text-slate-300 ">+977 9812362598</p>
            </div>
            <div className="flex gap-4 justify-center cursor-pointer items-center">
              <img src={icons.email} alt="email" className="object-contain bg-cover w-5 h-3 mt-2" />
              <p className="text-sm font-montserrat text-balanced text-slate-300">example@fylo.com</p>
            </div>
          </div>

          <div className="flex flex-1 p-2">
            <div className="flex flex-1 flex-col justify-start items-start gap-2 text-sm font-montserrat text-balanced text-slate-300">
              <a href="#">About Us</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-1 flex-col justify-start items-start gap-2 text-sm font-montserrat text-balanced text-slate-300">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>


          <div className="flex flex-row gap-4 flex-1">
          <div className="bg-white rounded-full w-6 h-6 border">
          <img src={socialMedia.facebook} alt="facebook" className="object-contain bg-cover" />
          </div>
          <div className="bg-white rounded-full w-6 h-6 border">
          <img src={socialMedia.instagram} alt="instagram" className="object-contain bg-cover"/>
          </div>
          <div className="bg-white rounded-full w-6 h-6 border">
          <img src={socialMedia.twitter} alt="twitter" className="object-contain bg-cover"/>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer