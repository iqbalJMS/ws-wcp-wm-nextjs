'use client';
import React from 'react';

const Modal = ({
  isShow,
  onCancel,
}: {
  isShow: boolean;
  onCancel: () => void;
}) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={
        !isShow
          ? 'hidden'
          : 'bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 max-h-full'
      }
    >
      <div
        className="flex justify-center items-center p-4 w-full h-screen"
        onClick={onCancel}
      >
        <div className="relative w-5/12 h-2/3 bg-white  shadow">
          <div className="h-3/4">
            <iframe
              height="450"
              src="https://www.youtube.com/embed/RIt437CR7bY"
              title="Pakai BRImo, #LoginKeseruanmu Semua Beres dari Rumah"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full"
            ></iframe>
          </div>
          <div className=" p-4 md:p-5 border-t border-gray-200 rounded-b ">
            <h3 className="text-sm font-light">20 Jan 2023</h3>
            <h1 className="font-semibold text-xl pt-2">
              Pakai BRImo, #LoginKeseruanmu Semua Beres dari Rumah
            </h1>
            <p className="text-[#555555] font-light">
              Buka Rekening sambil kerja di rumah, Bayar listrik gak perlu lama,
              Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada
              kuota, Top up BRIZZI so easy di hape aja
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
