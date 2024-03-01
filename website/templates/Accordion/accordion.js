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
            <h2 className="w-20 px-8 py-4 text-3xl font-semibold text-white bg-Accordion "> - </h2>
            :
            <h2 className="w-20 py-4 text-3xl font-semibold text-white px-7 bg-Accordion "> + </h2>
          }
          <h2 className="py-4 pl-4 text-sm font-bold lg:text-xl">{title}</h2>
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
