import SimpleBookmark from "./SimpleBookmark"
const Features = () => {
  return (
    <section className="flex items-center  flex-col gap-10 py-40" >
        <h1 className="text-3xl sm:text-5xl">Features</h1>
        <p className="w-1/2 text-center">our aim is to make it quick and easy for you to access your <br/> favourite websites. Your bookmark sync between your devices <br/> so you can access them on the go</p>
        <div className="flex gap-10 py-20">
            <a className="border-b-2 border-red-500 hover:text-red-500 h-10 w-60 text-center shadow-md">Simple Bookmarking</a>
            <a className="hover:text-red-500 h-10 w-60 text-center shadow-md">Speedy Searching</a>
            <a className="hover:text-red-500 h-10 w-60 text-center shadow-md">Easy Sharing</a>
        </div>
        <SimpleBookmark/>
    </section>
  )
}

export default Features
