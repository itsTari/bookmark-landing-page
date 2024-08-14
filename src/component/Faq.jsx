import { useState } from 'react'
import data from './FaqData';
import AccordionItem from './FaqBody';
const Faq = () => {
    const [active, setActive] = useState(null)
    const handleItemClick = (id) => {
        setActive((prevId) => (prevId === id ? null : id));
       };
  return (
    <section className="flex items-center  flex-col gap-10 py-20" >
        <h1 className="text-2xl sm:text-5xl">Frequently asked question</h1>
        <p className="w-full sm:w-1/2 text-center"> Here are some of our FAQ's. if you have any other questions you'd like answered please feel free to email us. </p>
        <div className='w-full sm:w-1/2'>
           {data.map((item, id) => (
            <AccordionItem
            key={id}
            question={item.question}
            answer={item.answer}
            isOpen={active === id}
            onClick={() => handleItemClick(id)}
            />
          ))}
        </div>
        <button className="bg-blue-800 p-3 rounded">More Info</button>
    </section>
  )
}

export default Faq
