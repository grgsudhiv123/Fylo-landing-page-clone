
const Button = ({button}) => {
  return (
    <button className="text-white bg-emerald-500 hover:bg-emerald-300 w-full p-3 max-md:p-2 rounded-full font-montserrat font-semibold text-lg max-sm:text-xs max-md:text-sm">
        {button}
    </button>
  )
}

export default Button;