import Illustrator from "../assets/images/illustration-features-tab-2.svg";
const SpeedySearching = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between sm:px-24 gap-16 px-10">
      <div className="sm:w-1/2 w-full relative">
        {/* <div className='bg-blue-800 w-96 h-60 rounded-bl-3xl place-self-start absolute top-60 left-0 p-0'></div> */}
        <img className="px-10" src={Illustrator}></img>
      </div>
      <div className="w-full text-center sm:text-start pl-0 sm:pl-24 sm:w-1/2">
        <h2 className="text-2xl sm:text-4xl ">Speed Searching</h2>
        <p className="py-6 sm:py-10">
          Organize your bookmark however you like. Our simple drag-and-drop
          interface gives you complate control over how you manager your
          favorites sites
        </p>
        <button className="bg-blue-800 p-3 rounded">More Info</button>
      </div>
    </section>
  )
};

export default SpeedySearching;
