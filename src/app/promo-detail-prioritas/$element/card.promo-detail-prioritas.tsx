'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ShareIcon from '@/lib/element/global/icons/share-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from 'next/link';

export default function CE_PromoDetailPrioritas({
  title,
  image,
  terms,
  startDate,
  endDate,
  merchant,
  lokasi,
}: {
  title: string;
  image: string;
  terms: string;
  startDate: string;
  endDate: string;
  merchant: string;
  lokasi: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useOnClickOutside(elementRef, () => setActive(false));

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      <div className="w-full flex justify-center py-10">
        <section className="w-full lg:w-11/12 xl:w-7/12">
          <section className="w-full grid grid-cols-1 place-items-start space-y-5 pb-12">
            <div className="w-full flex justify-center md:flex-none lg:w-8/12">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image}`}
                width={1000}
                height={1000}
                alt="image bri prioritas"
                className="w-11/12"
              />
            </div>
            <div className="overflow-hidden w-full h-32 lg:w-full flex flex-col space-y-5 lg:flex-row justify-between items-start px-5">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div
                onClick={() => setActive(!active)}
                className=" relative w-52 lg:w-60 flex items-center justify-center py-3 rounded-full uppercase font-bold text-base lg:text-xl text-white bg-prioritycolor hover:bg-gray-600 duration-300 cursor-pointer"
              >
                <span className="pr-2">
                  <ShareIcon
                    className="text-white"
                    width={20}
                    height={20}
                    stroke=""
                  />
                </span>
                refer a friend
                <div
                  className={[
                    'absolute w-[20rem] -right-24 pt-2',
                    'transition-all ease-in-out duration-200',
                    active ? 'top-full ' : 'top-12 invisible ',
                  ].join(' ')}
                >
                  <div
                    className={`
          absolute top-[1%] right-4 rotate-180
          border-l-[0.7rem] border-r-[0.7rem]  
          border-l-transparent border-r-transparent border-white
          h-5 w-5`}
                  />
                  <div className="w-fit bg-white rounded-3xl px-3">
                    <ul className="text-xs flex items-center justify-center text-black space-x-2">
                      <li>
                        <Link
                          href={'https://x.com/i/flow/login'}
                          target="_blank"
                        />
                        <svg
                          fill="#141333"
                          height="35px"
                          width="35px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="-143 145 512 512"
                          xmlSpace="preserve"
                        >
                          <path
                            d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
                          />
                        </svg>
                      </li>
                      <li>
                        <Link
                          href={
                            'https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F'
                          }
                          target="_blank"
                        >
                          <svg
                            fill="#141333"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="35px"
                            height="35px"
                            viewBox="0 0 97.75 97.75"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
		h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"
                              />
                            </g>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={'https://www.linkedin.com/login'}
                          target="_blank"
                        >
                          <svg
                            fill="#141333"
                            height="35px"
                            width="35px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="-143 145 512 512"
                            xmlSpace="preserve"
                          >
                            <path
                              d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={'https://web.whatsapp.com/'}
                          target="_blank"
                        >
                          <svg
                            className="bg-[#141333] rounded-full p-[3px]"
                            fill="#ffffff"
                            width="35px"
                            height="35px"
                            viewBox="0 0 256 256"
                            id="Flat"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z" />
                          </svg>
                        </Link>
                      </li>
                      <li
                        onClick={async () => {
                          await navigator.clipboard.writeText(
                            'navigator.clipboard.hello'
                          );
                        }}
                      >
                        <svg
                          className="bg-[#141333] rounded-full p-[6px]"
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
            </div>
          </section>
          <section className="grid grid-cols-1 sm:flex flex-row ">
            <div className="sm:basis-1/4 px-5 border-b sm:border-b-0 border-[#D6D6D6] sm:w-60">
              <h1 className="font-light">Terms & Condition</h1>
            </div>
            <div className="sm:basis-4/5 p-5">
              <div className="text-priobg-prioritycolor space-y-3 text-sm tracking-wide leading-6">
                {parseHTMLToReact(terms)}
              </div>
            </div>
          </section>
          <div className="w-full pt-10 font-light">
            <div className="sm:hidden">
              <h1 className="py-3 border-y border-[#D6D6D6] px-5">
                Periode Promo
              </h1>
              <h2 className="text-priobg-prioritycolor p-5 ">
                {formatDate(startDate)} - {formatDate(endDate)}
              </h2>
            </div>
            <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
              <div className="w-[260px]">
                <h1 className="py-3">Periode Promo</h1>
              </div>
              <div>
                <h2 className="text-priobg-prioritycolor py-3">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </h2>
              </div>
            </div>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Info Merchant</h1>
            <h2 className="p-5 text-priobg-prioritycolor">{merchant}</h2>
          </div>
          <div className="hidden sm:flex border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Info Merchant</h1>
            </div>
            <h2 className="pt-3 text-priobg-prioritycolor">{merchant}</h2>
          </div>
          <div className="sm:hidden font-light">
            <h1 className="p-5 border-y border-[#D6D6D6]">Lokasi</h1>
            <h2 className="p-5 text-priobg-prioritycolor">{lokasi}</h2>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] font-light p-5">
            <div className="w-[260px]">
              <h1 className="py-3">Lokasi</h1>
            </div>
            <h2 className="pt-3 text-priobg-prioritycolor">{lokasi}</h2>
          </div>
        </section>
      </div>
    </>
  );
}
