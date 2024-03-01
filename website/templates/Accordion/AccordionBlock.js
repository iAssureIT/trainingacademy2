/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import Accordion from "@/templates/Accordion/accordion.js";

const AccordionBlock = ({ inputData }) => {
  const { dash, pageTitle, pageTitleCss, accordionData } = inputData;

  return (
    <div className="container mx-auto px-5 lg:px-32 xl:px-32 pb-10 bg-white">
      {dash && (
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            {[...Array(3)].map((_, index) => (
              <li key={index} className={`dash${index + 1} ${dash}`} />
            ))}
          </ul>
        </div>
      )}
      {pageTitle && (
        <div
          className={
            pageTitleCss
              ? pageTitleCss
              : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
          }
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        />
      )}
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionBlock;
