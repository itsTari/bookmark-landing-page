import SimpleBookmark from "./SimpleBookmark"
import EasySharing from "./EasySharing"
import SpeedySearching from "./SpeedySearching"
import { useState } from "react"
import { NavLink } from "react-router-dom"
const Features = () => {
    const [display, setDisplay]= useState('SimpleBookmark')
    // const [active, setActive]= useState('border-b-2 border-red-500')
  return (
    <section className="flex items-center  flex-col gap-10 py-40" >
        <h1 className="text-3xl sm:text-5xl">Features</h1>
        <p className="w-1/2 text-center">our aim is to make it quick and easy for you to access your <br/> favourite websites. Your bookmark sync between your devices <br/> so you can access them on the go</p>
        <div className="flex gap-10 py-20">
            <button onClick={()=> setDisplay('SimpleBookmark')} className={display ? "border-b-2 border-red-500 hover:text-red-500 h-10 w-60 text-center shadow-md" :"hover:text-red-500 h-10 w-60 text-center shadow-md" }><a>Simple Bookmarking</a></button>
            <button onClick={()=> setDisplay('SpeedySearching')} className="hover:text-red-500 h-10 w-60 text-center shadow-md"><a >Speedy Searching</a></button>
            <button onClick={()=> setDisplay('EasySharing')} className="hover:text-red-500 h-10 w-60 text-center shadow-md"><a>Easy Sharing</a></button>
        </div>
        {display === 'SimpleBookmark' && <SimpleBookmark/> }
        {display === 'SpeedySearching' && <SpeedySearching/> }
        {display === 'EasySharing' && <EasySharing/> }
        
    </section>
  )
}

export default Features
