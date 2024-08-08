import { SlArrowDown } from "react-icons/sl";
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
     return(
       <div className="border-t-2 text-left py-4 " >
       <button className={`flex items-center justify-between w-full`} onClick={onClick} >
        <p className='hover:text-red-500'>{question}</p>
        <SlArrowDown className={isOpen ? 'rotate-180 text-red-500' : ''} /> 
       </button>
   
        <div className={isOpen ? 'block' :'hidden'}>
         <p className="">{answer}</p>
        </div>
      </div>
     )
   }
export default AccordionItem