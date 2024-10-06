import React from 'react';
import LocationIcon from './location-icon';
export default function CardVariant7() {
  const LIST_CARD_CONTENT = [
    {
      OfficeName: 'Kantor Cabang Bukit Tinggi',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
    {
      OfficeName: 'Lorem ipsum dolor',
      Address: 'Jl.Dewi Sri, Kuta. Badung - Bali',
      phone: '0361750270',
      gmaps: 'Lihat di Peta',
    },
  ];

  return (
    <main className="w-full flex justify-center">
      <section className="w-full 2xl:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-2 place-items-center">
        {LIST_CARD_CONTENT.map((item, index) => (
          <div
            key={index}
            className="bg-white-02 object h-56 w-72 xl:w-80 rounded-2xl flex flex-col justify-between p-4 border border-gray-300 shadow-2xl"
          >
            <div className="space-y-3">
              <h1 className="text-[#070059] text-xl font-bold hover:underline underline-offset-2 cursor-pointer">
                {item.OfficeName}
              </h1>
              <h2 className="text-[#7D809D] font-light text-sm">
                {item.Address}
              </h2>
              <h3 className="text-sm">{item.phone}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <LocationIcon className="" width={20} />
              <button className="text-[#3E4182] text-sm">Lihat di Peta</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
