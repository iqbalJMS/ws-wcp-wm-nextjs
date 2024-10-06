import React from 'react';

export default function CardVariant9() {
  return (
    <main
      className="w-full h-96 flex flex-col items-center justify-center space-y-3"
      style={{
        backgroundImage: `url('/images/dummy/banner.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white font-semibold text-3xl ">
        Interested to join our investment?
      </h1>
      <h2 className="text-white pb-5">Find out our branch for register</h2>
      <button className="py-2 px-10 bg-[#080087] text-white uppercase rounded-full font-semibold hover:bg-gray-600 duration-300">
        find branch office
      </button>
    </main>
  );
}
