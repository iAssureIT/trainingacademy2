"use client";
import { useState } from 'react';
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordionToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="mb-4 border-2 rounded-md border-Accordion">
      <div className="flex items-center justify-between"
        onClick={handleAccordionToggle}
      >
        <div className="flex">
          {isOpen
            ?
            <div className="items-center object-center w-20 px-8 py-10 md:py-3 text-3xl font-semibold text-white lg:py-4 place-content-center bg-orangeColor" > <span>-</span></div>
            :
            <div className="items-center object-center w-20 px-8 py-10 md:py-3 text-3xl font-semibold text-white lg:py-4 place-content-center bg-orangeColor"> <span>+</span></div>
          }
          <h2 className="py-4 pl-4 my-auto text-sm font-bold lg:text-xl">{title}</h2>
        </div>
      </div>
      {isOpen &&
        <div className="py-6 pl-24 text-sm border lg:text-xl bg-offWhite">
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
