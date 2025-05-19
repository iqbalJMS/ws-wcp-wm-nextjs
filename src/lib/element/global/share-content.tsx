'use client';
import React, { useRef, useState } from 'react';
import ShareIcon from './share-icon';
import Link from 'next/link';
import TwitterIcon from './icons/twitter-icon';
import FacebookIcon from './icons/facebook-icon';
import LinkedinIcon from './icons/linkedin-icon';
import WhatsappIcon from './icons/whatsapp-icon';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Image from 'next/image';
import successIcon from '@/../../public/images/icon-menu/success-filled-svgrepo-com.svg';
import closeIcon from '@/../../public/images/icon-menu/close-bold-svgrepo-com.svg';
import ModalVideo from './modal.video';
import { usePathname } from 'next/navigation';

export default function CE_ShareContent() {
  const [active, setActive] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const pathname = usePathname();

  const urlLink = `${process.env.NEXT_PUBLIC_SELF_BASE_URL}/web/wealth-management${pathname}`;

  setTimeout(() => {
    closeModal();
  }, 10000);

  useOnClickOutside(elementRef, () => setActive(false));
  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className=" relative px-8 flex items-center justify-center py-3 rounded-full uppercase font-bold text-base lg:text-xl text-white bg-gray-600 hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <span className="pr-2">
          <ShareIcon className="text-white" width={20} height={20} stroke="" />
        </span>
        Share
        <div
          className={[
            'absolute w-[20rem] -right-24 pt-2',
            'transition-all ease-in-out duration-200',
            active ? 'top-full ' : 'top-12 invisible ',
          ].join(' ')}
        >
          <div
            className={`absolute top-[1%] right-4 rotate-180 border-l-[0.7rem] border-r-[0.7rem] border-l-transparent border-r-transparent border-white h-5 w-5`}
          />
          <div className="w-fit rounded-3xl px-3">
            <ul className="text-xs flex items-center justify-center text-black space-x-2">
              <li>
                <Link
                  href={`https://x.com/intent/tweet?text=${urlLink ?? '/404'}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon
                    fill="#ffffff"
                    className="bg-[#4B5563] rounded-full p-1"
                    height={35}
                    width={35}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?&quote=${urlLink ?? '/404'}`}
                  target="_blank"
                >
                  <FacebookIcon
                    className=""
                    fill="#4B5563"
                    height={35}
                    width={35}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlLink ?? '/404'}`}
                  target="_blank"
                >
                  <LinkedinIcon
                    className=""
                    width={35}
                    height={35}
                    fill="#4B5563"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://web.whatsapp.com/send?text=${urlLink ?? '/404'}`}
                  target="_blank"
                >
                  <WhatsappIcon
                    className="bg-[#4B5563] rounded-full p-[3px]"
                    fill="#ffffff"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li
                onClick={async () => {
                  await navigator.clipboard.writeText(`${urlLink ?? '/404'}`);
                  setModalOpen(true);
                }}
              >
                <svg
                  className="bg-[#4B5563] rounded-full p-[6px]"
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="35px"
                  height="35px"
                  viewBox="0 0 353.809 353.809"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M230.962,122.919c-10.1-10.076-21.562-18.531-33.176-24.452c-6.785-3.459-15.108-0.769-18.555,6.023
			c-3.468,6.792-0.775,15.108,6.017,18.567c9.079,4.624,18.128,11.325,26.198,19.383c12.004,12.003,20.951,26.259,24.524,39.116
			c2.84,10.13,2.119,18.278-1.934,22.338L115.208,322.716c-9.16,9.163-37.392,1.459-61.426-22.596
			c-24.061-24.056-31.771-52.284-22.611-61.447l43.147-43.156c5.392-5.393,5.392-14.123,0-19.516
			c-5.393-5.393-14.124-5.393-19.516,0l-43.142,43.156c-21.836,21.827-11.917,65.969,22.584,100.479
			c22.155,22.151,48.264,34.173,69.896,34.173c12.076,0,22.761-3.747,30.583-11.571L253.546,223.41
			c11.481-11.476,14.676-28.968,9.02-49.276C257.66,156.587,246.449,138.405,230.962,122.919z"
                      />
                      <path
                        d="M319.558,34.33c-15.486-15.486-33.67-26.697-51.203-31.597c-20.309-5.663-37.801-2.462-49.275,9.007L100.248,130.557
			c-11.466,11.475-14.664,28.985-9.007,49.281c4.906,17.54,16.117,35.729,31.612,51.203c10.076,10.082,21.557,18.542,33.173,24.463
			c2.009,1.027,4.149,1.508,6.272,1.508c5.011,0,9.863-2.751,12.286-7.53c3.468-6.791,0.775-15.096-6.02-18.561
			c-9.076-4.63-18.128-11.338-26.196-19.39c-12.003-12.01-20.954-26.259-24.527-39.109c-2.84-10.136-2.123-18.291,1.937-22.344
			L238.595,31.255c4.059-4.047,12.201-4.768,22.338-1.934c12.85,3.591,27.111,12.526,39.115,24.524
			c24.037,24.043,31.747,52.284,22.584,61.453l-43.145,43.15c-5.387,5.392-5.387,14.124,0,19.522c5.393,5.392,14.123,5.392,19.516,0
			l43.168-43.157C363.975,112.975,354.055,68.833,319.558,34.33z"
                      />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ModalVideo>
        <div
          className={
            !modalOpen
              ? 'hidden'
              : 'overflow-y-auto overflow-x-hidden fixed bottom-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 max-h-full'
          }
        >
          <div
            className="flex justify-start items-end p-5 lg:p-4 w-full h-screen"
            onClick={() => closeModal()}
          >
            <div className="relative w-72 h-14 flex justify-center items-center bg-[#D4EDDA] border-[#155724] border-2 rounded shadow">
              <div className="w-60 flex items-center">
                <Image
                  src={successIcon}
                  alt={'success-icon'}
                  height={18}
                  width={18}
                />
                <h1 className="text-xs text-[#328042]">
                  <span className="font-bold px-2">Success:</span>
                  the url has been copied
                </h1>
              </div>
              <Image
                className="cursor-pointer"
                src={closeIcon}
                alt={'close-icon'}
                height={18}
                width={18}
              />
            </div>
          </div>
        </div>
      </ModalVideo>
    </>
  );
}
