import React from 'react';
import Image from 'next/image';
import ShareIcon from './icons/share-icon';

export default function CardVariant10b() {
  const LIST_TABEL_CONTENT = [
    {
      premi: '10 Tahun',
      cashback: '10% dari premi tahunan',
    },
    {
      premi: '5 Tahun',
      cashback: '5% dari premi tahunan',
    },
    {
      premi: 'Tunggal',
      cashback: '1% dari premi tahunan',
    },
  ];
  return (
    <main className="w-full flex justify-center">
      <section className="w-full lg:w-11/12 xl:w-8/12">
        <section className="w-full grid grid-cols-1 place-items-start space-y-5 pb-12">
          <div className="w-full lg:w-9/12">
            <Image
              src={'/images/dummy/bri-prioritas.png'}
              width={1000}
              height={1000}
              alt="image bri prioritas"
              className="w-11/12"
            />
          </div>
          <div className="w-full lg:w-10/12 grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:place-items-end">
            <h1 className="text-2xl font-semibold">
              Program Reward Asuransi AMORA
            </h1>
            <button className="w-60 flex items-center justify-center py-3 px-8 rounded-full uppercase font-bold text-xl text-white bg-[#080087] hover:bg-gray-600 duration-300">
              <span className="pr-2">
                <ShareIcon
                  className="text-white"
                  width={15}
                  height={15}
                  stroke=""
                />
              </span>
              refer a friend
            </button>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:flex flex-row ">
          <div className="sm:basis-1/4 py-3 px-5 border-b sm:border-b-0 border-[#D6D6D6] sm:w-60">
            <h1 className="font-light">Terms & Condition</h1>
          </div>
          <div className="sm:basis-4/5">
            <div className="text-[#1738C1] text-sm tracking-wide leading-relaxed">
              <h1 className="text-[#100087] font-semibold text-base">
                Deskripsi Program:
              </h1>
              <p className="pt-1 pb-7">
                Program reward ini untuk nasabah BRI Private atau nasabah BRI
                Prioritas yang melakukan pembelian Produk Asuransi AMORA sesuai
                dengan syarat dan ketentuan yang ditetapkan
              </p>
              <h1 className="text-[#100087] font-semibold text-base">
                Periode Program:
              </h1>
              <p className="pt-1 pb-7">
                Program ini berlaku hingga 30 September 2024 (tanggal submission
                terakhir)
              </p>
              <h1 className="text-[#100087] font-semibold text-base">
                Peserta Program:
              </h1>
              <p className="pt-1 pb-7">
                Peserta Program ini adalah nasabah yang membelu polis Produk
                Asuransi AMora di seluruh Indonesia sesuai dengan syarat dan
                ketentuan yang ditetapkan.
              </p>
              <h1 className="text-[#100087] font-semibold text-base">
                Benefit Program:
              </h1>
              <p className="pt-1 pb-7">
                Bagi nasabah yang memenuhi ketentuan syarat program pemasaran
                Produk Asuransi Amora dengan model bisnis referensi dengan
                detail sebagai berikut:
              </p>
              <div>
                <table className="w-full md:w-9/12 lg:w-8/12 table-auto">
                  <thead className="bg-white">
                    <tr className="text-[rgb(0,0,127)] text-sm h-10">
                      <th className="border w-1 text-center pl-2 font-semibold">
                        Masa Pembayaran Premi
                      </th>
                      <th className="border w-28 text-center pl-2 font-semibold">
                        Cashback
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {LIST_TABEL_CONTENT.map((item, index) => (
                      <tr key={index} className="space-y-2 font-light text-sm ">
                        <td className="text-center pl-3 border border-[#E7E7ED] h-14">
                          {item.premi}
                        </td>
                        <td className="text-center border border-[#E7E7ED] pl-3">
                          {item.cashback}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h1 className="text-[#100087] font-semibold text-base pt-10">
                Syarat dan Ketentuan:
              </h1>
              <ul className="list-decimal pl-5 space-y-1">
                <li>
                  Besaran premi yang diperhitungkan dalam cashback adalah
                  berdasarkan premi tahunan untuk pembayaran 5 (lima) tahun dan
                  10 (sepuluh) tahun. Sedangkan untuk premi tunggal perhitungan
                  cashback berdasarkan premi sekaligus.
                </li>
                <li>Nasabah dapat membeli lebih dari 1 (satu) polis.</li>
                <li>Program cashback dihitung per-polis nasabah</li>
                <li>
                  Polis yang diperhitungkan adalah polis yang inforce (aktif)
                </li>
                <li>
                  Tidak terdapat kuota dan maksimum cashback pada program ini.
                  Seluruh polis yang sesuai dengan ketentuan program akan
                  mendapatkan cashback sesuai table cashback.
                </li>
                <li>
                  Nasabah yang memenuhi syarat dan ketentuan program akan
                  otomatis mendapatkan cashback tanpa perlu melakukan pengajuan
                  program.
                </li>
                <li>
                  Polis sudah melewati masa free look 14 (empat belas) hari
                  kalender
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="w-full pt-10 font-light">
          <div className="sm:hidden">
            <h1 className="py-3 border-y border-[#D6D6D6]">Periode Promo</h1>
            <h2 className="text-[#1738C1] py-3">
              13 Agustus 2024 - 30 September 2024
            </h2>
          </div>
          <div className="hidden sm:flex justify-between items-center border-y border-[#D6D6D6] font-light">
            <h1 className="py-3">Periode Promo</h1>
            <h2 className="text-[#1738C1] py-3">
              13 Agustus 2024 - 30 September 2024
            </h2>
          </div>
        </div>
        <div>
          <h1 className="py-3 border-y border-[#D6D6D6] font-light">
            Info Merchant
          </h1>
        </div>
        <div className="sm:hidden font-light">
          <h1 className="py-3 border-y border-[#D6D6D6]">Lokasi</h1>
          <h2 className="pt-3 text-[#1738C1]">Seluruh Indonesia</h2>
        </div>
        <div className="hidden sm:flex justify-between items-center border-y border-[#D6D6D6] font-light">
          <h1 className="py-3 border-y border-[#D6D6D6]">Lokasi</h1>
          <h2 className="pt-3 text-[#1738C1]">Seluruh Indonesia</h2>
        </div>
      </section>
    </main>
  );
}
