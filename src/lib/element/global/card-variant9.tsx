import React from 'react';

export default function CardVariant9() {
  return (
    <main
      className="relative w-full h-96 flex flex-col items-center justify-center space-y-3 z-0"
      style={{
        backgroundImage: `url('/images/dummy/bg-cardVariant9.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute w-full h-96 bg-black opacity-70"></div>
      <h1 className="text-white font-semibold text-3xl z-10 ">
        Interested to join our investment?
      </h1>
      <h2 className="text-white pb-5 z-10">Find out our branch for register</h2>
      <button className="py-3 px-5 bg-[#080087] text-white uppercase rounded-full font-semibold hover:bg-gray-600 duration-300 z-10">
        find branch office
      </button>
    </main>
  );
}
