'use client';

export function CE_BannerVariant05() {
  const data = [
    {
      imgUrl:
        'https://bri.co.id/documents/1044486/1045199/banner-promo-min.jpg/42fb164e-ee1e-7922-4156-74a030253753?t=1610325875151',
      label: 'promo',
    },
  ];

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[58vh] md:h-[70vh] xl:h-[55vh]
        bg-left bg-no-repeat bg-cover flex justify-center items-center z-0"
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
