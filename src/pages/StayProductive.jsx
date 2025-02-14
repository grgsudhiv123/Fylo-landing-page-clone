import {introImgs} from "../constants/Constants"
import {icons} from "../constants/Constants"

const StayProductive = () => {
  return (
    <section className="w-full h-auto bg-[#181e2a] py-10">
      <div className="max-w-screen-lg mx-auto flex flex-row ">
        <div className="flex-1 justify-end">
          <img src={introImgs.productive} alt="stay productive image" className="min-w-full object-contain"/>
        </div>
        <div className="flex-1">
          <div className="flex h-full ml-10 flex-col justify-center items-start gap-5">
          <h1 className="font-palanquin text-slate-200 text-5xl font-extrabold">Stay productive, wherever you are</h1>
          <p className="font-montserrat text-slate-300 text-md">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p className="font-montserrat text-slate-300 text-md">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <div className="flex flex-row gap-2 hover:border-b hover:border-cyan-300 py-2">
          <a href="#" className="font-montserrat text-slate-200 text-sm">See how Fylo works </a>
          <img src={icons.arrow} alt="arrow" className="w-6 h-6"/>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StayProductive