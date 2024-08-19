import Logo from "../assets/images/logo-bookmark.svg";
import { NavLink} from "react-router-dom";
const nav = () => {
  return (
    <nav className="flex  justify-between px-40 py-10">
        <div>
          <img src={Logo}></img>
        </div>
        <div className="flex gap-10 ">
          <NavLink to="/feature" className="uppercase hover:text-red-500 cursor-pointer ">
            feature
          </NavLink>
          <NavLink to="/pricing" className="uppercase hover:text-red-500 cursor-pointer">
            pricing
          </NavLink>
          <NavLink to="/contact" className="uppercase hover:text-red-500 cursor-pointer">
            Contact
          </NavLink>
          <NavLink to="/login" className="uppercase hover:text-red-500  cursor-pointer w-24 rounded border-2 bg-red-500 text-white hover:text-black hover:bg-transparent border-red-500 text-center shadow-md hover:border-red-500">
            Login
          </NavLink>
        </div>
      </nav>
  )
}

export default nav
