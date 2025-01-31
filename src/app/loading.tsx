'use client';
import Image from 'next/image';
import React from 'react';
import loadingIcon from '@/../../public/images/loading.svg';

export default function Loading() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Image src={loadingIcon} alt="coba" height={100} width={100} />
      </div>
    </>
  );
}
