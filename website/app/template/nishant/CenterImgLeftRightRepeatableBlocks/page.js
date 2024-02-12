import React from "react";

const MyComponent = () => {
  return (
    <section className="bg-blue-200 text-center p-8">
      <h1 className="text-3xl font-bold mb-6">Block Title</h1>

      <div className="p-6 mb-4">
        <h3 className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vivamus nec est vitae felis ullamcorper aliquet. Donec
        </h3>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 p-2">
          {/* Left Blocks */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-full rounded overflow-hidden shadow-lg mb-4 bg-blue-500"
            >
              <div className="flex" style={{ height: "130px", justifyContent: "end" }}>

                <div className="w-2/3 p-4 text-right">
                  <h2 className="font-bold text-base sm:text-lg mb-2">
                    Title {index}
                  </h2>
                  <h3 className="text-gray-700 text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sagittis nulla ut purus hendrerit.
                  </h3>
                </div>

                <div
                  className="bg-white border-8 w-16 sm:w-24"
                  style={{ width: "130px", height: "130px" }}
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
                    <img
                      src={`your-image-url-${index}.jpg`}
                      alt={`Image ${index}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 justify-center items-center "> */}
        <div className="w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
          {/* Center Block */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative mx-auto flex justify-center items-center">
            <img
              src="/your-image.jpg"
              alt="Big Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          {/* Right Blocks */}
          {[4, 5, 6].map((index) => (
            <div
              key={index}
              className="w-full rounded overflow-hidden shadow-lg mb-4 bg-blue-500"
            >
              <div className="flex" style={{ height: "130px" }}>
                <div
                  className="bg-white border-8 w-16 sm:w-24"
                  style={{ width: "130px", height: "130px" }}
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
                    <img
                      src={`your-image-url-${index}.jpg`}
                      alt={`Image ${index}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-2/3 p-4 text-left">
                  <h2 className="font-bold text-base sm:text-lg mb-2">
                    Title {index}
                  </h2>
                  <h3 className="text-gray-700 text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sagittis nulla ut purus hendrerit.
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
