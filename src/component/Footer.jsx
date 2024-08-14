import FooterNav from "./FooterNav"
const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-between gap-10 py-10 bg-blue-800 text-white">
        <h4>35,000 Already Joined</h4>
        <h2 className="text-3xl text-center">Stay up-to-date with what <br/> we're doing</h2>
        <div className="flex text-center gap-10">
            <input className="px-2 border-red-500 outline-none" placeholder="example@email.com" required/>
            <button className="border rounded bg-white text-black px-5 py-2  hover:border-red-500 hover:text-red-500">Contact Us</button>
        </div>
      </section>
      <FooterNav/>
    </>
  )
}

export default Footer
