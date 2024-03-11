/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
import Accordion from "@/templates/Accordion/accordion.js";
const AccordionBlock = ({ inputData }) => {
  const { dash, pageTitle, pageTitleCss, accordionData, titleDescriptionCss, titleDescription, titleDescription_2, titleDescription_2Css } = inputData;
  return (
    <div className="max-w-5xl px-10 mx-auto mb-10 lg:px-32 xl:px-32 mt-20">
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
      {
        titleDescription && (
          <div className={titleDescriptionCss ? titleDescriptionCss : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl mt-5 mb-10"}
            dangerouslySetInnerHTML={{ __html: titleDescription }} ></div>
        )}
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
      {
        titleDescription_2 && (
          <div className={titleDescription_2Css ? titleDescription_2Css : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl my-10"}
            dangerouslySetInnerHTML={{ __html: titleDescription_2 }} ></div>
        )
      }
    </div>
  );
};

export default AccordionBlock;
