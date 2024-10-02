import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="relative object-contain lg:w-[600px] lg:h-[400px] w-[320px] min-w-[320px] h-[240px]">
          <Image src="/images/not-found.png" fill alt="img-not-found" />
        </div>

        <div className="lg:mt-0 mt-6">
          <p className="lg:text-4xl text-[#014a94] lg:text-left text-2xl text-center">
            Anda kehilangan <strong>arah?</strong>
          </p>
          <p className="lg:text-4xl text-2xl text-[#014a94] mt-4 lg:text-left text-center">
            404. Not Found
          </p>
          <p className="lgLtext-base text-sm my-6">
            Ini bukan halaman yang ingin saya tuju!
          </p>

          <div className="flex gap-4 items-center lg:flex-row flex-col">
            <Link href="/">
              <button className="bg-[#f59a22] uppercase text-white py-3 px-6 rounded-full border border-orange-01">
                Pergi Ke Beranda
              </button>
            </Link>
            <Link href="https://bri.co.id/web/guest/bantuan" extern>
              <button className="bg-white uppercase py-3 px-6 rounded-full border border-orange-01 text-orange-01">
                Bantuan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
