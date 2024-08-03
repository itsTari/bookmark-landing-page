import Logo from "../assets/images/logo-bookmark.svg";
const Navbar = () => {
  return (
    <navbar className="flex  justify-between p-10">
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
          <a to="/login" className="uppercase hover:text-red-500 cursor-pointer border-2 w-30">
            Login
          </a>
        </div>
      </navbar>
  )
}

export default Navbar
