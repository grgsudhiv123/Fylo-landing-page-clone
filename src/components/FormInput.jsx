import Button from "../components/Button"


const FormInput = () => {
  return (
    <div className="flex flex-row justify-around w-full mx-auto max-sm:flex-col max-sm:gap-2">
        <input type="text" placeholder="example@gmail.com" className="w-[60%] text-slate-700 px-5 max-sm:px-3 max-sm:py-2 max-sm:text-xs rounded-full outline-none max-sm:w-full"/>
        <div className="w-[30%] max-sm:w-full">
        < Button button="Get started for free" />
        </div>
      
    </div>
  )
}

export default FormInput