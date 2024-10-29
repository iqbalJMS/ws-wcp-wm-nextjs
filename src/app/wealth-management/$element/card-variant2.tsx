import DistributionIcon from '@/lib/element/global/icons/distribution-icon';
import GrowthIcon from '@/lib/element/global/icons/growth-icon';
import ProtectionIcon from '@/lib/element/global/icons/protection-icon';
import React from 'react';

export default function CardVariant2() {
  const LIST_CARD_CONTENT = [
    {
      icon: ProtectionIcon,
      label: 'Perlindungan Kekayaan',
      text: 'Proteksi & Diversifikasi Kekayaan',
    },
    {
      icon: GrowthIcon,
      label: 'Akumulasi Kekayaan',
      text: 'Investasi Kekayaan',
    },
    {
      icon: DistributionIcon,
      label: 'Distribusi Kekayaan',
      text: 'Rencana Pensiun',
    },
  ];
  return (
    <main className="w-full h-auto flex flex-col items-center  p-5">
      <section className="w-full lg:w-10/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 pb-16">
        <div className="uppercase space-y-2 pb-5">
          <h3 className="text-base font-light">mengapa memilih</h3>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Wealth management bri
          </h1>
        </div>
        <div className="flex items-end">
          <h1 className="text-sm md:text-base ">
            adalah sistem komprehensif dan kohesif yang bertujuan untuk
            melestarikan dan melindungi, aset yang terkumpul dan berkembang,
            serta aset transisi.
          </h1>
        </div>
      </section>
      <section className="w-full lg:w-10/12 xl:w-8/12 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {LIST_CARD_CONTENT.map((item, index) => (
          <div
            key={index}
            className="group w-full h-60 flex flex-col items-center justify-center hover:bg-black hover:rounded-b-xl duration-300"
          >
            <item.icon
              className="pb-8 group-hover:fill-white group-hover:stroke-wmcolor"
              width={90}
              stroke="white"
              fill="#080087"
            />

            <h1 className="text-wmcolor font-bold text-base group-hover:text-white">
              {item.label}
            </h1>
            <h2 className="text-sm font-light group-hover:text-white">
              {item.text}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
}
