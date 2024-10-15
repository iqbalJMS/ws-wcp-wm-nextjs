'use server';

import React from 'react';

import ScrollToTop from '@/lib/element/global/scroll.top';

// import CE_BannerMain from '@/app/$element/client.banner.main';


export default async function PageTester() {
  

  return (
    <React.Fragment>
      <div className='h-screen bg-black'></div>
      
      <ScrollToTop />
    </React.Fragment>
  );
}
