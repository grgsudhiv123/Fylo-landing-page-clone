
const ServiceComponent = ({img, header, content}) => {
  return (
    <div className="w-full flex flex-col py-5 justify-center items-center gap-5">
        <img src={img} alt="" className="w-20"/>
        <h1 className="text-slate-200 font-palanquin font-semibold text-xl">{header}</h1>
        <p className="w-2/3 text-center font-montserrat text-slate-200 text-sm">{content}</p>
    </div>
  )
}

export default ServiceComponent
