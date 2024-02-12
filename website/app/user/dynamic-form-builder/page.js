"use client";

import React, { useState } from "react";
import FormElements from "@/components/dynamic-form/FormElements";

export default function FormBuilder() {
    
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
    return (
        <div className="block bg-white pb-10">
            <h1 className="pt-3 pb-6 text-6xl font-bold text-center text-blue-600"> 
                Welcome to Dynamic Form Builder
            </h1>
            <div className="bg-gray-300 grid grid-cols-12 mx-3 border h-96">
                <section className="col-span-3 bg-yellow-300 text-center">Components 
                <div className="grid grid-cols-2 gap-4 p-4">
            {/* First Row */}
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 1 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(1)}
            >
              Box 1
            </button>
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 2 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(2)}
            >
              Box 2
            </button>

            {/* Second Row */}
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 3 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(3)}
            >
              Box 3
            </button>
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 4 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(4)}
            >
              Box 4
            </button>

            {/* Third Row */}
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 5 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(5)}
            >
              Box 5
            </button>
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 6 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(6)}
            >
              Box 6
            </button>

            {/* Fourth Row */}
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 7 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(7)}
            >
              Box 7
            </button>
            <button
              className={`h-20 flex items-center justify-center ${selectedButton === 8 ? 'bg-red-400' : 'bg-blue-200'}`}
              onClick={() => handleButtonClick(8)}
            >
              Box 8
            </button>
          </div>
    
                </section>
                <section className="col-span-9 bg-green-300">
                    
                    <section className="w-full bg-blue-200 h-1/4 text-center">
                        Changing Room
                    </section>
                    <section className="w-full h-3/4 text-center place-content-center my-auto">
                        Form Render Engine
                    </section>
                </section>
            </div>
        </div>
    );
}


// import React, { useState } from 'react';

// function App() {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleButtonClick = (buttonNumber) => {
//     setSelectedButton(buttonNumber);
//   };

//   return (
//     <div className="block bg-white pb-10">
//       <h1 className="pt-3 pb-6 text-6xl font-bold text-center text-blue-600"> 
//         Welcome to Dynamic Form Builder
//       </h1>
//       <div className="bg-gray-300 grid grid-cols-12 mx-3 border h-96">
//         <section className="col-span-3 bg-yellow-300 text-center">Components
//         <div className="grid grid-cols-2 gap-4 p-4">
//             {/* First Row */}
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 1 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(1)}
//             >
//               Box 1
//             </button>
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 2 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(2)}
//             >
//               Box 2
//             </button>

//             {/* Second Row */}
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 3 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(3)}
//             >
//               Box 3
//             </button>
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 4 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(4)}
//             >
//               Box 4
//             </button>

//             {/* Third Row */}
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 5 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(5)}
//             >
//               Box 5
//             </button>
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 6 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(6)}
//             >
//               Box 6
//             </button>

//             {/* Fourth Row */}
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 7 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(7)}
//             >
//               Box 7
//             </button>
//             <button
//               className={`h-20 flex items-center justify-center ${selectedButton === 8 ? 'bg-red-400' : 'bg-blue-200'}`}
//               onClick={() => handleButtonClick(8)}
//             >
//               Box 8
//             </button>
//           </div>
//         </section>
//         <section className="col-span-9 bg-green-300">
          
//         </section>
        
//                 <section className="col-span-9 bg-green-300">
                    
//                     <section className="w-full bg-blue-200 h-1/4 text-center">
//                         Changing Room
//                     </section>
//                     <section className="w-full h-3/4 text-center place-content-center my-auto">
//                         Form Render Engine
//                     </section>
//                 </section>
//       </div>
//     </div>
//   );
// }

// export default App;
