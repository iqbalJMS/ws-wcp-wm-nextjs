import React from 'react';
import HomeHeader from '@/lib/element/global/header/home-header';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className="w-full h-screen bg-slate-400">
        <div className="w-full h-28 bg-white flex justify-center items-center">
          {/* header logo */}
          <section className="w-5/12 bg-red-400">logo</section>
          <section className="w-5/12 bg-yellow-400 flex flex-col justify-center items-end space-y-5">
            {/* header top */}
            <div className="space-x-5">
              <Link href={''}>Go to corporate site</Link>
              <Link href={''}>Search</Link>
              <Link href={''}>Kalkulator Finansial</Link>
              <Link href={''}>ID</Link>
            </div>
            {/* header bottm */}
            <div className="space-x-5">
              <Link href={''}>BRI PRIVATE</Link>
              <Link href={''}>BRI PRIVATE</Link>
              <Link href={''}>CERITA KAMI</Link>
              <button>LOGIN </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
