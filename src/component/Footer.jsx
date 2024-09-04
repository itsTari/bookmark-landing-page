import FooterNav from "./FooterNav"
const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-between gap-10 py-10 bg-blue-800 text-white">
        <h4>35,000 Already Joined</h4>
        <h2 className="text-3xl text-center">Stay up-to-date with what <br/> we're doing</h2>
        <form className="flex sm:flex-row flex-col sm:items-center gap-5">
            <input type="email" className="px-2 py-2 border-red-500 sm:w-66 rounded outline-none" placeholder="example@email.com" required/>
            <button className="border rounded text-black px-5 py-2 border-red-500 text-white bg-red-500 hover:bg-white hover:text-red-500">Contact Us</button>
        </form>
      </section>
      <FooterNav/>
    </>
  )
}

export default Footer
