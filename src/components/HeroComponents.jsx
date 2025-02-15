import {introImgs} from "../constants/Constants.jsx"
import Button from "../components/Button.jsx"


const HeroComponents = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto max-w-screen-2xl mx-auto mt-32 pb-5 gap-y-20">
      <div className="flex justify-center w-full"> 
        <img src={introImgs.intro} alt="intro img" className="w-[700px] object-contain bg-cover"/>
      </div>
      <div className="flex justify-center w-1/2"> 
        <h1 className="font-palanquin text-3xl font-extrabold text-slate-200 w-full/2">
            <span className=" block text-center">All your files in one secure location, accessible anywhere.</span>
        </h1>
      </div>
      <div className="flex justify-center w-1/3">
        <p className="font-montserrat text-lg font-light text-slate-200 text-center">
            Fyol stores all your most important filesin one secure location. 
            Access them wherever you need, share and collaborate with
            friends family, and co-workers.
        </p>
      </div>
      <div className="w-1/6">
        <Button button="Get Started"/>
      </div>
    </div>
  );
};

export default HeroComponents