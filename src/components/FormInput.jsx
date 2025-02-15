import Button from "../components/Button"


const FormInput = () => {
  return (
    <div className="flex flex-row justify-around w-full mx-auto ">
        <input type="text" placeholder="example@gmail.com" className="w-[60%] text-slate-700 px-5 rounded-full outline-none"/>
        <div className="w-[30%]">
        < Button button="Get started for free" />
        </div>
      
    </div>
  )
}

export default FormInput