import React from 'react';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-rigth-icon';
import Link from 'next/link';

export default function CE_CardVariant16() {
  const data = [
    {
      image:
        'https://bri.co.id/documents/1045040/1047674/Lifestyle+Concierge-min.jpg/cad82e0c-9fe3-c506-a13f-5d5c3fd538e2?t=1605724524139',
      label: 'Lifestyle Privilege',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci debitis numquam consequuntur.',
      link: '',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1047674/Lifestyle+Concierge-min.jpg/cad82e0c-9fe3-c506-a13f-5d5c3fd538e2?t=1605724524139',
      label: 'Lifestyle Privilege',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci debitis numquam consequuntur.',
      link: '',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1047674/Lifestyle+Concierge-min.jpg/cad82e0c-9fe3-c506-a13f-5d5c3fd538e2?t=1605724524139',
      label: 'Lifestyle Privilege',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci debitis numquam consequuntur.',
      link: '',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1047674/Lifestyle+Concierge-min.jpg/cad82e0c-9fe3-c506-a13f-5d5c3fd538e2?t=1605724524139',
      label: 'Lifestyle Privilege',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci debitis numquam consequuntur.',
      link: '',
    },
    {
      image:
        'https://bri.co.id/documents/1045040/1047674/Lifestyle+Concierge-min.jpg/cad82e0c-9fe3-c506-a13f-5d5c3fd538e2?t=1605724524139',
      label: 'Lifestyle Privilege',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci debitis numquam consequuntur.',
      link: '',
    },
  ];
  return (
    <div className="w-full h-[150vh] flex flex-col items-center space-y-10">
      <section className="w-full text-center">
        <h1 className="uppercase text-privatecolor text-4xl font-bold -tracking-tighter ">
          privileges
        </h1>
        <h1 className="pt-3">Hotline 021-7658712</h1>
      </section>
      <section className="w-8/12 h-full md:w-9/12 md:h-fit lg:w-11/12 xl:w-10/12 2xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center ">
        {data?.map((item, index) => (
          <Link
            href={item?.link}
            key={index}
            className="group w-96 h-full md:w-80 md:h-72 lg:w-full xl:w-96 2xl:w-full overflow-hidden z-0 rounded-xl"
            style={{
              backgroundImage: `url('${item?.image}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="z-50 text-white w-full h-full flex items-end justify-between">
              <div className="px-7 pb-3 translate-y-16 md:translate-y-20 lg:translate-y-20 xl:translate-y-16 2xl:translate-y-16 group-hover:translate-y-0 duration-300">
                <h1 className="text-lg font-bold pb-2">{item?.label}</h1>
                <p className="text-xs pt-2">{item?.desc}</p>
              </div>
              <div className="pr-5 pb-2">
                <ArrowRightIcon
                  stroke={'white'}
                  width={35}
                  height={35}
                  fill="white"
                  className=""
                />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
