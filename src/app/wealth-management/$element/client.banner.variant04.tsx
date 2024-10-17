'use client';

// import ButtonSecondary from '@/lib/element/global/button.secondary';
// import Image from 'next/image';

export function CE_BannerVariant04() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm10.jpg',
      label: 'videos',
    },
  ];

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[58vh] md:h-[70vh] xl:h-[64vh]
       bg-red-200 bg-left bg-no-repeat bg-cover flex justify-center items-center z-0"
          style={{
            backgroundImage: `url(${item.imgUrl})`,
          }}
        >
          <div className="absolute bg-black w-full h-full opacity-50 z-10"></div>
          <h1 className="text-white text-3xl lg:text-4xl font-bold uppercase z-20">
            {item?.label}
          </h1>
        </div>
      ))}
      <div className="w-full h-4 bg-[#D2D2D2]"></div>
    </>
  );
}
