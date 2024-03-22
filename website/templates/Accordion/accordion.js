"use client";
import { useState } from 'react';
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordionToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="mb-1 border-2  border-Accordion">
      <div className="flex items-center justify-between"
        onClick={handleAccordionToggle}
      >
        <div className="flex">
          {isOpen
            ?
            <div className="items-center mx-auto object-center px-6 md:px-5  py-8 md:py-5 lg:py-6 xl:py-3 2xl:py-3 my-auto text-4xl font-semibold text-white  place-content-center bg-orangeColor" > <span>-</span></div>
            :
            <div className="items-center mx-auto object-center px-6 md:px-5  py-8 md:py-5 lg:py-6 xl:py-3 2xl:py-3 my-auto text-3xl font-semibold text-white  place-content-center bg-orangeColor"> <span>+</span></div>
          }
          <div className="w-0 h-0 my-auto
            border-t-[12px] border-t-transparent
            border-l-[12px] border-l-orangeColor
            border-b-[12px] border-b-transparent">
          </div>
          <h2 className=" py-2 md:py-4 pl-4 my-auto text-sm font-bold lg:text-lg">{title}</h2>
        </div>
        
      </div>
      {isOpen &&
        <div className="py-6 pl-24 text-sm border lg:text-lg bg-offWhite">
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
