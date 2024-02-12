import React from "react";

const Block = () => {
  return (
    <div className="bg-blue-200 text-center p-8 ">
      <h1 className="text-3xl font-bold mb-6">Block Title</h1>

      <div className="bg-white p-6 mb-4 w-auto">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vivamus nec est vitae felis ullamcorper aliquet. Donec
          tristique, erat in faucibus sagittis, ante arcu facilisis purus, eu
          vestibulum nisi nunc eu velit. Vivamus nec est vitae felis ullamcorper
          aliquet. Donec tristique, erat in faucibus sagittis, ante arcu
          facilisis purus, eu vestibulum nisi nunc eu velit.
        </h3>
      </div>

      <div className="flex p-12">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-96 h-96 bg-blue-500 border-8 border-gray">
            <img
              src="big-image.jpg"
              alt="Big Image"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-1/2 p-2">
          {/* Repeated Blocks */}
          <div className="w-100 rounded overflow-hidden shadow-lg m-4 bg-blue-500">
            <div className="flex">
              <div
                className=" bg-white border-8 p-8"
                style={{ width: "140px" }}
              >
                <div style={{ paddingTop: "50%", position: "relative" }}>
                  <img
                    src="your-image-url.jpg"
                    alt="Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="w-2/3 p-4 text-left">
                <h2 className="font-bold text-xl mb-2">Title</h2>
                <h3 className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sagittis nulla ut purus hendrerit.
                </h3>
              </div>
            </div>
          </div>

          <div className="w-100 rounded overflow-hidden shadow-lg m-4 bg-blue-500">
            <div className="flex">
              <div
                className=" bg-white border-8 p-8"
                style={{ width: "140px" }}
              >
                <div style={{ paddingTop: "50%", position: "relative" }}>
                  <img
                    src="your-image-url.jpg"
                    alt="Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="w-2/3 p-4 text-left">
                <h2 className="font-bold text-xl mb-2">Title</h2>
                <h3 className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sagittis nulla ut purus hendrerit.
                </h3>
              </div>
            </div>
          </div>
          <div className="w-100 rounded overflow-hidden shadow-lg m-4 bg-blue-500">
            <div className="flex">
              <div
                className=" bg-white border-8 p-8"
                style={{ width: "140px" }}
              >
                <div style={{ paddingTop: "50%", position: "relative" }}>
                  <img
                    src="your-image-url.jpg"
                    alt="Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="w-2/3 p-4 text-left">
                <h2 className="font-bold text-xl mb-2 ">Title</h2>
                <h3 className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sagittis nulla ut purus hendrerit.
                </h3>
              </div>
            </div>
          </div>
          {/* Add more repeated blocks as needed */}
        </div>
      </div>
    </div>
  );
};

export default Block;

// import React from "react";
// import Image from 'next/image';

// const Block = () => {
//   return (
//     <section  className="bg-blue-200 text-center p-8 ">
//       <h1 className="text-3xl font-bold mb-6">Block Title</h1>

//       <div className=" p-6 mb-4">
//         <h3 className="text-base sm:text-lg ">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//           facilisi. Vivamus nec est vitae felis ullamcorper aliquet. Donec
         
//         </h3>
//       </div>

//       <div className="flex flex-col sm:flex-row p-4">
//       <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
//       <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
//   <div className="w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative">
//   <Image
//   src="big-image.jpg" // Replace with your actual image source
//   alt="Big Image"
//   width={width} // Set the width of the image
//   height={height} // Set the height of the image
//   layout="responsive" // Use "responsive" for responsive images
// />
//   </div>
// </div>
// </div>
//         <div className="w-full sm:w-1/2 ">
//           {/* Repeated Blocks */}
//           {[1, 2, 3].map((index) => (
//             <div
//               key={index}
//               className="w-full rounded overflow-hidden shadow-lg mb-4 bg-blue-500"
//             >
//               <div className="flex"
//               style={{height:"130px"}}>
//                 <div className="bg-white border-8  w-16  sm:w-24"
//                 style={{width:"130px", height:"130px"}}>
//                   <div
//                     className="w-16 h-16 sm:w-24 sm:h-24 relative"
//                     // style={{ paddingTop: "100%" }}
//                   >
//                     <img
//                       src={`your-image-url-${index}.jpg`}
//                       alt={`Image ${index}`}
//                       className="absolute top-0 left-0 w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-2/3 p-4 text-left">
//                   <h2 className="font-bold text-base sm:text-lg mb-2">
//                     Title {index}
//                   </h2>
//                   <h3 className="text-gray-700 text-xs sm:text-base">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nulla sagittis nulla ut purus hendrerit.
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </section>
//   );
// };



// export default Block;






