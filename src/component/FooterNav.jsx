import { NavLink } from "react-router-dom"
import Logo from '../assets/images/logo-bookmark.svg'
import FaceBook from '../assets/images/icon-facebook.svg'
import Twitter from '../assets/images/icon-twitter.svg'
const FooterNav = () => {
  return (
    <footer className="flex sm:flex-row flex-col justify-between py-5 items-center text-center sm:px-40 gap-10 bg-blue-900 text-white">
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 text-sm">
         <img src={Logo}></img>
          <NavLink to="/feature" className="uppercase hover:text-red-500 cursor-pointer ">
            feature
          </NavLink>
          <NavLink to="/pricing" className="uppercase hover:text-red-500 cursor-pointer">
            pricing
          </NavLink>
          <NavLink to="/contact" className="uppercase hover:text-red-500 cursor-pointer">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-10 ">
            <NavLink><img className="hover:bg-red-800" src={FaceBook}/></NavLink>
            <NavLink><img src={Twitter}/></NavLink>
        </div>
    </footer>
  )
}

export default FooterNav
