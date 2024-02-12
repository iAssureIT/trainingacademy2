import React from 'react';
import Image from 'next/image';

const BlockComponent = () => {
  return (
    <div className="text-center p-4 md:p-16 shadow-md bg-blue-200">
      <h1 className="text-3xl font-bold mb-6">Tithe</h1>
      <div className="bg-white p-4 mb-4 rounded-md">
        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac justo sem.</p>
      </div>
      <div className="mb-4">
      <Image src="/big-image.jpg" alt="Big Image" width={500} height={300} />

      </div>
      <div className="flex flex-wrap space-x-4">
        <div className="w-1/2 md:w-1/4 bg-white p-4 rounded-md">
          <div className="mb-4">
          <Image src="/square-image1.jpg" alt="Square Image 1" width={400} height={200} />
          </div>
          <h2 className="text-xl font-semibold">Block Title 1</h2>
          <p className="text-base">Block Text 1</p>
        </div>
        <div className="w-1/2 md:w-1/4 bg-white p-4 rounded-md">
          <div className="mb-4">
          <Image src="/square-image1.jpg" alt="Square Image 1" width={400} height={200} />
          </div>
          <h2 className="text-xl font-semibold">Block Title 2</h2>
          <p className="text-base">Block Text 2</p>
        </div>
        {/* Add more repeated blocks as needed */}
      </div>
    </div>
  );
};

export default BlockComponent;
