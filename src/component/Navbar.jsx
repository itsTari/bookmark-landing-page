import Logo from "../assets/images/logo-bookmark.svg";
const Navbar = () => {
  return (
    <navbar className="flex  justify-between p-10">
        <div>
          <img src={Logo}></img>
        </div>
        <div className="flex gap-10 ">
          <a to="/feature" className="uppercase">
            feature
          </a>
          <a to="/pricing" className="uppercase">
            pricing
          </a>
          <a to="/contact" className="uppercase">
            Contact
          </a>
          <a to="/login" className="uppercase">
            Login
          </a>
        </div>
      </navbar>
  )
}

export default Navbar
