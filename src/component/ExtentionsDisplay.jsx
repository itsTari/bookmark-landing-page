import Extentions from "./Extentions"
const ExtentionsDisplay = () => {
  return (
    <section className="flex items-center  flex-col gap-10 py-0">
        <h1 className="text-3xl sm:text-5xl">Download the extension</h1>
        <p className="w-full text-center sm:w-1/2">We've got more browser in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
        <div>
            <Extentions />
        </div>
    </section>
  )
}

export default ExtentionsDisplay
