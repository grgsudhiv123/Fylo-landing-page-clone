import {brandLOgo} from "../constants/Constants"


const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit sticky z-10 top-0 p-5 pt-10">
        <div className="flex flex-row justify-between items-center">
            <div className="font-montserrat font-semibold">
                <img src={brandLOgo.logo} alt="" className="w-28 object-contain bg-cover"/>
            </div>
            <div className=" flex font-montserrat font-semibold gap-20 mx-10">
                <a className="text-slate-300 font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Features</a>
                <a className="text-slate-300 font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Terms</a>
                <a className="text-slate-300 font-palanquin font-light cursor-pointer hover:text-slate-200 " href="#">Sign in</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar