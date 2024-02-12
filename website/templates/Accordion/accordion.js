import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="border-Accordion border-2 rounded-md mb-4">
      <div className="flex justify-between items-center"
          onClick={handleAccordionToggle}
        >
        {/* <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 ">
          <h2 className="col-span-1 text-3xl font-semibold p-4 bg-blue text-white ">  {isOpen ? '-' : '+'}</h2>
          <h2 className="col-span-5 xl:col-span-7 text-xl font-bold pl-4 py-4">{title}</h2>
        </div> */}
        
        <div className="flex">
          {isOpen 
          ? 
            <h2 className="w-20 text-3xl font-semibold py-4 px-8 bg-Accordion text-white "> - </h2>
          : 
            <h2 className="w-20 text-3xl font-semibold py-4 px-7 bg-Accordion text-white "> + </h2>
          }
          <h2 className="text-sm lg:text-xl font-bold pl-4 py-4">{title}</h2>
        </div>
        </div>
      {isOpen && 
        <div className="text-sm lg:text-xl pl-24 py-6 bg-offWhite border">
          <span
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          >
          </span>
        </div>
      }
    </div>
  );
};

export default Accordion;
