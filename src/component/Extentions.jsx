import Bg from '../assets/images/bg-dots.svg'
const Extentions = ({description, type, btn, image}) => {
  console.log(description)
  return (
    <>
        <div className='shadow-md p-5 flex flex-col items-center rounded-2xl'>
            <img src={image} className='py-4'/>
            <h3 className="text-lg font-bold">{description}</h3>
            <p className='text-slate-500'>{type}</p>
            <img src={Bg} className='py-5 w-48'/>
            <button className='bg-blue-800 w-52 h-12 text-white rounded hover:bg-white hover:text-blue-800 hover:border-2 border-blue-600'>{btn}</button>
        </div>
    </>
  )
}

export default Extentions
