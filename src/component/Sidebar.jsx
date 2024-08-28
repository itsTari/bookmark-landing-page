import Logo from "../assets/images/logo-bookmark.svg";
import Close from "../assets/images/icon-close.svg";
import FaceBook from '../assets/images/icon-facebook.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import { NavLink } from "react-router-dom";
const Sidebar = ({sidebar, setSidebar}) => {
  return (
    sidebar && <div className="bg-blue-900 fixed p-10 top-0 left-0 w-full h-dvh sm:hidden z-10 opacity-95">
      <div className="flex justify-between">
        <img src={Logo}/>
        <button onClick={()=>setSidebar(false)}><img src={Close}/></button>
      </div>
      <div className="flex flex-col items-center pt-20 gap-10 text-white">
          <NavLink to="/feature" className="uppercase hover:text-red-500">
            feature
          </NavLink>
          <NavLink to="/pricing" className="uppercase hover:text-red-500">
            pricing
          </NavLink>
          <NavLink to="/contact" className="uppercase hover:text-red-500">
            Contact
          </NavLink>
          <NavLink to="/login" className="uppercase hover:text-black w-full py-2 rounded border-2 bg-transparent text-white  hover:bg-white border-white text-center">
            Login
          </NavLink>
        </div>
        <div className="flex items-center justify-center pt-40 gap-10">
            <NavLink><img className="hover:bg-red-800" src={FaceBook}/></NavLink>
            <NavLink><img src={Twitter}/></NavLink>
        </div>
    </div>
  )
}

export default Sidebar
