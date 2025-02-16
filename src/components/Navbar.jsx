import {brandLOgo} from "../constants/Constants"


const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit sticky z-10 top-0 p-5 pt-10 max-md:pt-5 max-md:w-screen">
        <div className="flex flex-row justify-between items-center">
            <div className="font-montserrat font-semibold">
                <img src={brandLOgo.logo} alt="" className="w-28 max-sm:w-16  max-md:w-20 object-contain bg-cover"/>
            </div>
            <div className=" flex font-montserrat font-semibold gap-20 mx-10 max-md:gap-5 max-md:mx-0">
                <a className="text-slate-300 text-lg max-sm:text-sm font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Features</a>
                <a className="text-slate-300 text-lg max-sm:text-sm font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Terms</a>
                <a className="text-slate-300 text-lg max-sm:text-sm font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Sign in</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar