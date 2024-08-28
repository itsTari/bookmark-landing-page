import Logo from "../assets/images/logo-bookmark.svg";
import Menu from '../assets/images/icon-hamburger.svg'
import { NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <nav className="flex  items-center  justify-between px-10 sm:px-40 py-10">
        <div>
          <img src={Logo}></img>
        </div>
        <button onClick={()=>setSidebar(true)} className="sm:hidden">
          <img src={Menu}/>
        </button>
        <div className="flex gap-10 hidden sm:flex">
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
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      </nav>
  )
}

export default Navbar
