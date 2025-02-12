'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import creditcard from '@/../../public/images/dummy/cardCredit.png';
import creditcard2 from '@/../../public/images/dummy/cardCredit2.png';
import Image from 'next/image';

export default function CE_FlipCard({
  frontImage,
  backImage,
}: {
  frontImage: string;
  backImage: string;
}) {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="flip-card w-[600px] h-[360px] flex justify-center"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="flip-card-inner hidden md:flex w-[70%] h-[70%] md:w-[90%] md:h-[90%]"
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 180 : 360 }}
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
          >
            <div className="flip-card-front w-full h-full bg-cover cursor-pointer">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${frontImage ?? ''}`}
                alt="card credit image"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flip-card-back w-full h-full bg-cover cursor-pointer">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${backImage ?? ''} `}
                alt="card credit image"
                width={1000}
                height={1000}
              />
            </div>
          </motion.div>

          {/* Mobile */}
          <div className="flip-card-inner relative md:hidden w-[70%] h-[70%] md:w-[90%] md:h-[90%]">
            <div className="flip-card-transition group z-10 w-full h-full bg-cover cursor-pointer hover:z-0">
              <Image
                src={creditcard}
                alt="card credit image"
                width={1000}
                height={1000}
                className=""
              />
            </div>
            <div className="flip-card-transition w-full h-full bg-cover cursor-pointer z-0 hover:z-10">
              <Image
                src={creditcard2}
                alt="card credit image"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
