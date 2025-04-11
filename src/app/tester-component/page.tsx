import React from 'react';
import HomeHeader from '@/lib/element/global/header/home-header';

export default function page() {
  return (
    <>
      <div className="w-full h-screen m-5">
        <HomeHeader
          headerTop={[]}
          headerBottom={[]}
          variant={'transparent'}
          itemLogin={[]}
        />
      </div>
    </>
  );
}
