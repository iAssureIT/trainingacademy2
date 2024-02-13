import { useState } from 'react';

const Accordion = ({ title, content, accordianThemeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={"mb-4 border border-Accordion"}>
      <div className="flex items-center justify-between"
          onClick={handleAccordionToggle}
        >
        {/* <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 ">
          <h2 className="col-span-1 p-4 text-3xl font-semibold text-white bg-blue ">  {isOpen ? '-' : '+'}</h2>
          <h2 className="col-span-5 py-4 pl-4 text-xl font-bold xl:col-span-7">{title}</h2>
        </div> */}
        
        <div className="flex">
          {isOpen 
          ? 
            <h2 className="w-20 px-8 py-4 text-3xl font-semibold text-white bg-Accordion" > - </h2>
          : 
            <h2 className="w-20 py-4 text-3xl font-semibold text-white px-7 bg-Accordion"> + </h2>
          }
          <h2 className="py-4 pl-4 text-sm font-bold lg:text-xl">{title}</h2>
        </div>
        </div>
      {isOpen && 
        <div className="py-6 pl-24 text-sm border lg:text-md bg-offWhite">
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
