'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PlayIcon from '@/lib/element/global/play-icon';
import { useState } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import ModalVideo from '@/lib/element/global/modal.video';

export default function CE_VideosCard({
  data,
  variant,
}: {
  data: Array<{
    image: string;
    title: string;
    date: string;
    link: string;
  }>;
  variant: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    setModalIndex(null);
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  let color = '';

  if (variant == 'wm-prioritas-main-navigation') {
    color = 'prioritycolor';
  } else if (variant == 'wm-private-main-navigation') {
    color = 'privatecolor';
  } else {
    color = 'wmcolor';
  }

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center pb-20">
      <h1 className="text-3xl font-semibold uppercase">Video</h1>
      <h2 className="font-extralight pt-2 pb-16">
        Daftar putar teratas minggu ini
      </h2>
      <section
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        {data?.map((item, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={() => setModalOpen(true)}
            key={index}
            className="group relative w-96 h-max flex flex-col cursor-pointer rounded-lg"
          >
            <picture className=" relative overflow-hidden rounded-lg ">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                width={1000}
                height={1000}
                alt="img dummy"
                className="w-80 h-48 group-hover:scale-150 transition-all ease-in-out object-cover rounded-lg overflow-hidden duration-300 group-hover:blur-sm"
              />
              <div className="hidden group-hover:flex bg-black opacity-20 w-80 h-48 group-hover:scale-150 transition-all ease-in-out object-cover rounded-lg duration-300 group-hover:delay-300 absolute z-10 top-0"></div>
              <PlayIcon
                width={50}
                height={50}
                fill="white"
                className="absolute top-20 left-40 -z-10 group-hover:z-20 group-hover:ease-out group-hover:duration-500"
                stroke=""
              />
            </picture>
            <h3 className="text-xs font-semibold text-[#190D4B] pt-5">
              {parseHTMLToReact(item?.date)}
            </h3>
            <h1
              className={`text-${color} text-lg font-semibold group-hover:underline`}
            >
              {item?.title}
            </h1>
          </motion.div>
        ))}
        {modalOpen && (
          <ModalVideo>
            <div
              id="default-modal"
              tabIndex={-1}
              aria-hidden="true"
              className={
                !modalOpen
                  ? 'hidden'
                  : 'bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 max-h-full'
              }
            >
              <div
                className="flex justify-center items-center p-5 lg:p-4 w-full h-screen"
                onClick={() => closeModal()}
              >
                <div
                  data-aos="fade-down"
                  className="relative w-full md:w-9/12 lg:w-5/12 lg:h-2/3 bg-white  shadow"
                >
                  <div className="h-3/4">
                    <iframe
                      height="450"
                      src={data?.[modalIndex as number]?.image}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="w-full"
                    ></iframe>
                  </div>
                  <div className="h-auto bg-white p-4 md:p-5 border-t border-gray-200 rounded-b space-y-2">
                    <h3 className="text-xs lg:text-sm font-light">
                      {data?.[modalIndex as number]?.date}
                    </h3>
                    <h1 className="font-semibold text-lg lg:text-xl pt-2">
                      {data?.[modalIndex as number]?.title}
                    </h1>
                    <h2 className="text-[#555555] font-light text-sm lg:text-base">
                      {data?.[modalIndex as number]?.link}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </ModalVideo>
        )}
      </section>
    </div>
  );
}
