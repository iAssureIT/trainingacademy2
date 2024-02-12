// import React from 'react';

// const BlockTitle2 = () => {
//   return (
//     <div className="bg-blue-200 text-center p-8">
//       <h1 className="text-3xl font-bold mb-4">Block Title</h1>
//       <p className="text-center text-gray-600 mb-8 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla.</p>
//       <div className="flex flex-col sm:flex-row p-4">
//       <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
//   <div className="sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative"
//   style={{width:"550px"}}>
//     <img src="/your-image.jpg" alt="Image" className="w-full h-full object-cover" />
//   </div>
// </div>
//         <div className="w-1/2 p-4 ">
//           <h2 className="text-2xl font-bold mb-4 p-2">Sub Title</h2>
//           <p className="text-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockTitle2;

// import React from 'react';
// import Image from 'next/image';

// const LeftImgRightContentCarousel = () => {
//   return (
//     <section className="bg-blue-200 text-center p-4 sm:p-8">//classForLeftImageContainer
//          {
//                 props?.inputData?.blockTitle
//                 ?
//                     <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>{props?.inputData?.blockTitle}</h1>
//                 : 
//                     null
//             }
//             {
//                 props?.inputData?.blockContent
//                 ?
//                     <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent:'content-wrapper'}>
//                         {props?.inputData?.blockContent}
//                     </div>
//                 :
//                     null
//             }
//       <div className="flex flex-col sm:flex-row p-4">//classForblockContainer
//         <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">//classForImageContainer
//           <div className="w-full h-96 sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative">classForCardImage
//           <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4">classForblockSubTitle
//           <h2 className="text-2xl font-bold mb-4 p-2">Sub Title</h2>classForSubTitle
//           <p className="text-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla dolor sit amet, consectetur adipiscing elit. Vivamus nec urna ut ligula dignissim fringilla.</p>//classForSubTitlePara
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeftImgRightContentCarousel;

// import React from 'react';
// import Image from 'next/image'; // Import the Image component

// const BlockTitle2 = (props) => {
//   const {
//     sectionClass,
//     title,
//     description,
//     imageSrc,
//     imageAlt,
//     subTitle,
//     subTitleDescription,
//   } = props;


const React = require('react');
import Image from 'next/image'; // Import the Image component

const LeftImgRightContentCarousel = (props) => {
  return (
    <section className={` ${props.inputData?.classForLeftImageContainer}`}>
      {props?.inputData?.blockTitle ? (
        <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}>
          {props?.inputData?.blockTitle}
        </h1>
      ) : null}
      {props?.inputData?.blockContent ? (
        <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : 'content-wrapper'}>
          {props?.inputData?.blockContent}
        </div>
      ) : null}
      <div className={` ${props.inputData?.classForblockContainer}`}>
        <div className={` ${props.inputData?.classForImageContainer}`}>
          <div className={` ${props.inputData?.classForCardImage}`}>
            {/* Replace the img element with the Image component */}
            <Image src={props.inputData?.imageSrc} alt={props.inputData?.imageAlt} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={` ${props.inputData?.classForblockSubTitle}`}>
          <h2 className={` ${props.inputData?.classForSubTitle}`}>{props?.inputData?.subTitle}</h2>
          <p className={` ${props.inputData?.classForSubTitlePara}`}>{props?.inputData?.subTitleDescription}</p>
        </div>
      </div>
    </section>
  );
};

module.exports = LeftImgRightContentCarousel;

// export default BlockTitle2;

