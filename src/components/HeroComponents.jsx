import {introImgs} from "../constants/Constants.jsx"
import Button from "../components/Button.jsx"


const HeroComponents = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto max-w-screen-2xl mx-auto max-md:w-full mt-32 max-md:mt-20 max-sm:mt-10 pb-5 gap-y-20 max-md:gap-y-10">
      <div className="flex justify-center w-full"> 
        <img src={introImgs.intro} alt="intro img" className="w-[700px] max-md:w-[500px] max-sm:w-[300px] object-contain bg-cover"/>
      </div>
      <div className="flex justify-center w-1/2 max-md:w-full max-md:px-10"> 
        <h1 className="font-palanquin text-3xl max-md:text-2xl font-extrabold text-slate-200 w-full/2">
            <span className=" block text-center">All your files in one secure location, accessible anywhere.</span>
        </h1>
      </div>
      <div className="flex justify-center w-1/3 max-md:w-full max-md:px-10">
        <p className="font-montserrat font-light text-slate-200 text-center text-lg max-sm:text-xs max-md:text-sm">
            Fyol stores all your most important filesin one secure location. 
            Access them wherever you need, share and collaborate with
            friends family, and co-workers.
        </p>
      </div>
      <div className="w-1/6 max-md:w-1/3">
        <Button button="Get Started"/>
      </div>
    </div>
  );
};

export default HeroComponents