'use client';

// import Image from 'next/image';
// import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export function GlobalBanner() {
  const data = [
    {
      imgUrl: '/images/dummy/bannerWm1.jpg',
      label: 'A New Perspective of Investment',
      text: 'We are the one stop financial solution for the advancement of your business.',
    },
    {
      imgUrl: '/images/dummy/bannerWm2.jpg',
      label: 'An Old Tradition for a New Generations',
      text: 'As lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.',
    },
    {
      imgUrl: '/images/dummy/bannerWm3.jpg',
      label: 'Helping You Get Where You Want to be',
      text: 'We have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.',
    },
  ];

  const [index, setIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0); // Reset translate value when a new drag starts
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged enough, change the image
    if (translateX > 50) {
      goToPrevious();
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0); // Reset translate after slide
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={sliderRef}
        className="w-full h-screen"
      >
        {data.map((bannerItem, bannerIndex) => (
          <section
            key={bannerIndex}
            className={`w-full h-screen flex flex-col justify-center ${bannerIndex === index ? '' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${bannerItem.imgUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-white">
              <h1 className="font-semibold text-4xl">{bannerItem.label}</h1>
              <h2 className="">{bannerItem.text}</h2>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
