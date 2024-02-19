import { useState } from 'react';

const Accordion = ({ mb, title, content, accordianThemeColor }) => {
  // console.log("props------>",{mb});
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={mb ? "mb-0.5 border border-Accordion" : "mb-4 border border-Accordion"}>
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
            <div className="items-center object-center w-20 px-8 py-10 text-3xl font-semibold text-white lg:py-4 place-content-center bg-Accordion" > <span>-</span></div>
          : 
            <div className="items-center object-center w-20 px-8 py-10 text-3xl font-semibold text-white lg:py-4 place-content-center bg-Accordion"> <span>+</span></div>
          }
          <h2 className="py-4 pl-4 my-auto text-sm font-bold lg:text-xl">{title}</h2>
        </div>
        </div>
      {isOpen && 
        <div className="px-4 py-6 text-sm border lg:pr-4 lg:pl-24 border-Accordion lg:text-md bg-offWhite">
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
