import Illustrator from '../assets/images/illustration-features-tab-1.svg'
const SimpleBookmark = () => {
  return (
    <section className='flex items-center justify-between px-24'>
        <div className='w-1/2 relative'>
            {/* <div className='bg-blue-800 w-96 h-60 rounded-bl-3xl place-self-start absolute top-60 left-0 p-0'></div> */}
            <img className='px-10' src={Illustrator}></img>
        </div>
        <div className= 'w-1/2 pl-24'>
            <h2 className='text-2xl sm:text-4xl '>Bookmark in one click</h2>
            <p className='py-10'>Organize your bookmark however you like. Our simple drag-and-drop interface gives you complate control over how you manager your favorites sites </p>
            <button className='bg-blue-800 p-3 rounded'>More Info</button>
        </div>
    </section>
  )
}

export default SimpleBookmark
