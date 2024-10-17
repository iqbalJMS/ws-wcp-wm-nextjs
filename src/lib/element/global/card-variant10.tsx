import React from 'react';
import Image from 'next/image';
import ShareIcon from './icons/share-icon';

export default function CardVariant10() {
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
              Asuransi Griya Proteksi Maksima dan Layanan Safe Deposit Box
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
            <h1 className="font-light">Description</h1>
          </div>
          <div className="sm:basis-4/5">
            <div className="text-[#1738C1] space-y-3 text-sm tracking-wide leading-relaxed">
              <h1 className="text-[#100087] font-semibold text-base py-3">
                A. Asuransi Griya Proteksi Maksima :
              </h1>
              <p className="">
                Asuransi Griya Proteksi Maksimsa, asuransi yang memberikan
                jaminan atas kerusakan pada harta benda dan tempat tinggal yang
                secara langsung disebabkan oleh Kerusakan atau Kerugian Material
                (Kebakaran, Petir, Ledakan Asap, beserta Perluasannya), serta
                memberikan santunan Kecelakaan Diri dan Kesehatan, Bantuan Sewa,
                serta perlindungan Tanggung Jawab Pihak Ketiga.
              </p>
              <p>
                Resiko yang Dijamin Jaminan ini dibayarkan kepada Tertanggung
                apabila obyek yang diasuransikan baik bangunan dan atau isinya
                mengalami risiko yang dijamin oleh kondisi Polis.
              </p>
              <p className="py-2">a. Kerusakan</p>
              Kerugian Material Produk ini menjamin kerugian atau kerusakan pada
              harta benda dan atau kepentingan yang dipertanggungkan yang secara
              langsung disebabkan oleh:
              <ul className="list-disc pl-14">
                <li>Kebakaran</li>
                <li>Petir</li>
                <li>Ledakan</li>
                <li>Kejatuhan Pesawat Terbang</li>
                <li>Asap</li>
                <li>Bencana Alam</li>
                <li>Kebongkaran</li>
                <li>Kerusuhan Dan Huru — Hara</li>
                <li>Terorisme Dan Sabotase</li>
              </ul>
              <p>b. Kecelakaan Diri Dan Kesehatan</p>
              <ul className="list-disc pl-14">
                <li>Meninggal dunia atau cacat tetap.</li>
                <li>Santunan Biaya Pengobatan atau Perawatan Medis.</li>
              </ul>
              <p>c. Bantuan Sewa</p>
              <p>
                Bila objek Pertanggungan mengalami kerugian yang dijamin dalam
                polis dan sudah tidak layak dihuni maka Bantuan Sewa akan
                diberikan.
              </p>
              <p>d. Tanggung Jawab Hukum Kepada Pihak Ketiga</p>
              <p>
                Produk ini menjamin kerugian kepada Pihak Ketiga atas kerusakan
                fisik/ materi milik Plhak Ketiga akibat dari kerugian yang
                dijamin dalam polis, yang dibayarkan kepada Tertanggung setinggi
                - tingginya sebesar Santunan yang tercantum dalam polls.
                Pembayaran santunan diberikan atas dasar Surat Tuntutan dari
                Pihak Ketiga.Rate
              </p>
              <p>Premi</p>
              <ul className="list-disc pl-5">
                <li>Griya Proteksi Maksima Silver : 0,294‰</li>
                <li>Griya Proteksi Maksima Gold : 1,5‰</li>
                <li>Griya Proteksi Maksima Platinum : 2,25‰</li>
                <li>Biaya Polis : Rp 50.000,-</li>
              </ul>
              <Image
                src={'/images/dummy/asuransitable.png'}
                width={1000}
                height={1000}
                alt="image dummy"
                className="w-60 bg-red-400"
              />
              <h1>B. Layanan Safe Deposit Box :</h1>
              <p className="pb-2">
                perlindungan terhadap rumah tidak lengkap tanpa mengamankan
                dokumen-dokumen penting. Memanfaatkan SDB (Safety Deposit Box)
                adalah salah satu cara efektif untuk menjaga keamanan dokumen
                tersebut.
              </p>
              <p className="pb-2">
                Safe Deposit Box (SDB) adalah kotak penyimpanan harta atau
                surat-surat berharga yang dirancang secara khusus dari bahan
                baja dan ditempatkan dalam ruang khazanah yang kokoh dan tahan
                api untuk menjaga keamanan barang yang disimpan dan memberikan
                rasa aman bagi penggunanya.
              </p>
              <p className="pb-2">
                Nikmati privilege penyewaan Safe Deposit Box khusus bagi nasabah
                BRI Private dan BRI Prioritas di Sentra Layanan Prioritas dan
                Private
              </p>
              <p>Berikut Jenis dari Safe Deposit Box:</p>
              <Image
                src={'/images/dummy/asuransitable2.png'}
                width={1000}
                height={1000}
                alt="image dummy"
                className="w-24 bg-red-400"
              />
            </div>
          </div>
        </section>
        <div className="w-full pt-10 font-light">
          <div className="sm:hidden">
            <h1 className="py-3 border-y border-[#D6D6D6]">Periode Promo</h1>
            <h2 className="text-[#1738C1] py-3">
              26 September 2024 - No expired
            </h2>
          </div>
          <div className="hidden sm:flex justify-between items-center border-y border-[#D6D6D6] font-light">
            <h1 className="py-3">Periode Promo</h1>
            <h2 className="text-[#1738C1] py-3">
              26 September 2024 - No expired
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
