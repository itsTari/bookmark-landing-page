import Herobg from '../assets/images/illustration-hero.svg'
import Features from './Features'
import ExtentionsDisplay from './ExtentionsDisplay'
import Faq from './Faq'
const Hero = () => {
  return (
    <>
      <section className='flex pt-20'>
        <div className='px-20'>
            <h1 className="capitalize text-6xl">a simple bookmark manager</h1>
            <p className='pt-10'> A clean and simple way interface to organize your favorite <br/>website. Open a new browser tab and see your site load <br/> instantly. Try it for free </p>
            <div className='pt-10 flex space-x-8'>
                <button className="capitalize border-2 px-6 py-3 rounded border-blue-800 hover:text-blue-900 ">Get it on chrome</button>
                <button className="capitalize border-2 px-6 py-3 rounded border-blue-800 hover:text-blue-900">Get it on firefox</button>
            </div>
        </div>
        <div className="flex-left relative ">
            {/* <div className='bg-blue-800 w-96 h-60 rounded-bl-3xl place-self-end absolute top-60 right-0 z-0'></div> */}
            <img className='z-40' src={Herobg}/>
        </div>
    </section>
    <Features/>
    <ExtentionsDisplay/>
    <Faq/>
    </>
    
  )
}

export default Hero
