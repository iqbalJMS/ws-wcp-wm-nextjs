'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PlayIcon from '@/lib/element/global/play-icon';
import Modal from '@/lib/element/global/modal';
import { useState } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

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

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

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
            onClick={() => setIsShowModal(true)}
            key={index}
            className="group relative w-96 h-max flex flex-col cursor-pointer rounded-lg"
          >
            <picture className=" relative overflow-hidden rounded-lg ">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image}`}
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
        <Modal
          isShow={isShowModal}
          onCancel={() => setIsShowModal((prev) => !prev)}
        />
      </section>
    </div>
  );
}
