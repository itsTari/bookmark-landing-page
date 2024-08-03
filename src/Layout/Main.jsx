import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
    
  )
}

export default Main
