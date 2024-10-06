import React from 'react';

export default function CardVariant3() {
  const LIST_CARD_CONTENT = [
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Asuransi Griya Proteksi Maksima dan Layanan Safe Deposit Box',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Layanan BRI Prioritas, Investasi Reksadana dan Tabungan Emas',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Layanan Advisory BRI Prioritas dan Aplikasi BRIGHTS',
      textBtn: 'Lihat Promo',
    },
    {
      imgUrl: '/images/dummy/banner.jpg',
      label: 'Airport Lounge',
      textBtn: 'Lihat Promo',
    },
  ];
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center">
      <section className="w-full flex flex-col items-center pb-16">
        <h1 className="text-[#3D3D3D] font-semibold text-3xl uppercase">
          Promo Terbaru
        </h1>
        <h2 className="text-sm font-light text-center">
          Nikmati berbagai promo kami dan dapatkan keuntungannya
        </h2>
      </section>
      <section className="w-full grid grid-cols-1 place-items-center">
        {LIST_CARD_CONTENT.map((item, index) => (
          <div
            key={index}
            className="w-80 h-80 rounded-xl flex flex-col justify-end items-start p-5"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="pb-10 text-white text-lg font-semibold">
              {item.label}
            </h1>
            <button className="bg-red-100">{item.textBtn}</button>
          </div>
        ))}
      </section>
      <section className="w-full h-auto pt-20 flex justify-center items-center">
        <button className="bg-[#09028B] hover:bg-gray-600 duration-300 text-white py-3 px-10 rounded-full uppercase font-semibold">
          lihat semua promo
        </button>
      </section>
    </main>
  );
}
