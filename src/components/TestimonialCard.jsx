
const TestimonialCard = ({profileImg, name, role, testDesc}) => {
  return (
    <section className="w-1/3 p-3 rounded-md bg-[#292f46] flex flex-col gap-10 hover:shadow-md mb-10 hover:shadow-slate-400">
        <p className="text-balanced text-sm text-slate-300 font-montserrat">{testDesc}</p>
        <div className="flex gap-5 h-auto">
            <img src={profileImg} alt="profile image" className="w-7 h-7 rounded-full object-contain bg-cover"/>
            <div className="flex flex-col">
                <p className="text-balanced text-xs text-slate-300 font-montserrat font-bold">{name}</p>
                <p className="text-balanced text-[10px] text-slate-400 font-montserrat font-medium">{role}</p>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCard