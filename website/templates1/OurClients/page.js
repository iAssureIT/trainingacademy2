"use client"

// import React from 'react';

// const ClientComponent = () => {
//   return (
//     <div className="text-center p-4 md:p-16 shadow-md bg-blue-200">
//       <h1 className="text-3xl font-bold mb-6">Our Clients</h1>
//       <div className="flex justify-center">
//         <div className="bg-blue-500 rounded-xl p-4 md:p-16 shadow-md" style={{ maxWidth: "100%" }}>
//           <div className="flex flex-wrap justify-center md:space-x-16">
//             <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//               <img src="client1.jpg" alt="Client 1" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//             </div>
//             <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//               <img src="client2.jpg" alt="Client 2" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//             </div>
//             <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//               <img src="client3.jpg" alt="Client 3" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//             </div>
//             <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//               <img src="client4.jpg" alt="Client 4" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//             </div>
//             <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//               <img src="client5.jpg" alt="Client 5" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientComponent;


// import React from 'react';
// import Image from 'next/image'; // Import the Image component

// const ClientComponent = () => {
//   // Define an array of client data for better organization
//   const clients = [
//     { id: 1, src: 'client1.jpg', alt: 'Client 1' },
//     { id: 2, src: 'client2.jpg', alt: 'Client 2' },
//     { id: 3, src: 'client3.jpg', alt: 'Client 3' },
//     { id: 4, src: 'client4.jpg', alt: 'Client 4' },
//     { id: 5, src: 'client5.jpg', alt: 'Client 5' },
//   ];

//   return (
//     <div className="text-center p-4 md:p-16 shadow-md bg-blue-200">
//       <h1 className="text-3xl font-bold mb-6">Our Clients</h1>
//       <div className="flex justify-center"> //classForblockWrapper
//         <div className="bg-blue-500 rounded-xl p-4 md:p-16 shadow-md" style={{ maxWidth: "100%" }}>//classForblockContent
//           <div className="flex flex-wrap justify-center md:space-x-16">classForblockImage
//             {clients.map((client) => (
//               <div key={client.id} className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//                 {/* Replace the img element with the Image component */}
//                 <Image src={client.src} alt={client.alt} width={96} height={96} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientComponent;



// Carousel is pending//

// import React from 'react';

// const ClientComponent = ({ sectionClass, title, clients }) => {
//   return (
//     <div className={sectionClass}>
//       <h1 className="text-3xl font-bold mb-6">{title}</h1>
//       <div className="flex justify-center">
//         <div className="bg-blue-500 rounded-xl p-4 md:p-16 shadow-md" style={{ maxWidth: "100%" }}>
//           <div className="flex flex-wrap justify-center md:space-x-16">
//             {clients.map((client, index) => (
//               <div key={index} className="w-24 h-24 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//                 <img src={client.imageSrc} alt={`Client ${index + 1}`} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientComponent;


{/* <ClientComponent
  sectionClass="text-center p-4 md:p-16 shadow-md bg-blue-200"
  title="Our Clients"
  clients={[
    { imageSrc: 'client1.jpg' },
    { imageSrc: 'client2.jpg' },
    { imageSrc: 'client3.jpg' },
    { imageSrc: 'client4.jpg' },
    { imageSrc: 'client5.jpg' },
  ]}
/> */}


// import React from 'react'

// const OurTeam1 = (props) => {
//    var classForNoOfCards = props.inputData.classForNoOfCards 
//                            ? 
//                               props.inputData.classForNoOfCards 
//                            :
//                               "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
//    return(
//       <section>
//          {
//             props?.inputData?.blockTitle
//             ?
//                <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>{props?.inputData?.blockTitle}</h1>
//             : 
//                null
//          }
//           {
//             props?.inputData?.blockSubTitle
//             ?
//                <h1 className={props?.inputData?.classForblockSubTitle ? props?.inputData?.classForblockSubTitle:'blockSubTitle '}>{props?.inputData?.blockSubTitle}</h1>
//             : 
//                null
//          }
//          <div className={classForNoOfCards}>
//             {
//                props.inputData.cardsArray.map((card,index)=>{
//                   return(
//                      <div className={props.inputData?.classForCards} key={index}>
//                         <div className="block">
//                            <div className={"relative overflow-hidden bg-cover bg-no-repeat"}>
//                               <img  alt={card.altImg?card.altImg:"ourTeam"} src={card.cardImage} className={props.inputData?.classForCardImage ? props.inputData?.classForCardImage: "w-full"} />
//                            </div>
//                         </div>
//                      </div>
//                   )
//                })
//             }
//          </div>
//       </section>
//    )
// }

// export default OurTeam1





import React from "react";

const OurClients = (props) => {
  return (
    <section>
      <div className={` ${props.inputData?.classForImageContainer}`}>
        {props?.inputData?.blockTitle ? (
          <h1
            className={
              props?.inputData?.classForblockTitle
                ? props?.inputData?.classForblockTitle
                : "blockTitle "
            }
          >
            {props?.inputData?.blockTitle}
          </h1>
        ) : null}
        <div className={` ${props.inputData?.classForblockWrapper}`}>
          <div className={` ${props.inputData?.classForblockContent}`}>
            <div className={props.inputData?.classForblockImage}>
              {props.inputData.cardsArray.map((card, index) => (
                <div
                  key={index}
                  className={` ${props.inputData?.classForCardImage}`}
                >
                  <img
                    alt={card.altImg ? card.altImg : "ourTeam"}
                    src={card.cardImage}
                    className={
                      props.inputData?.classForImageStyle
                        ? props.inputData?.classForImageStyle
                        : "w-full rounded-full"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurClients;