import Logo from "../assets/images/logo-bookmark.svg";
const Navbar = () => {
  return (
    <navbar className="flex  justify-between px-40 py-10">
        <div>
          <img src={Logo}></img>
        </div>
        <div className="flex gap-10 ">
          <a to="/feature" className="uppercase hover:text-red-500 cursor-pointer ">
            feature
          </a>
          <a to="/pricing" className="uppercase hover:text-red-500 cursor-pointer">
            pricing
          </a>
          <a to="/contact" className="uppercase hover:text-red-500 cursor-pointer">
            Contact
          </a>
          <a to="/login" className="uppercase hover:text-red-500 cursor-pointer w-20 border border-black text-center shadow-md hover:border-red-500">
            Login
          </a>
        </div>
      </navbar>
  )
}

export default Navbar
