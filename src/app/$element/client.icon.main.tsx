'use client';

import Image from '@/lib/element/global/image';
import Modal from '@/lib/element/global/modal';
import { useMemo, useState } from 'react';
import { T_IconList } from '@/app/$action/constants';
import Link from '@/lib/element/global/link';
import { SFN_SetPersonalizedMenu } from '@/app/$function/sfn.set.personalized-menu';

type T_IconMainProps = {
  maxListShow?: number;
  list: T_IconList[];
  cookiesName: string;
};

type T_IconMenuProps = {
  image: string;
  title?: string;
  variant?: 'config' | 'main';
  hover?: 'selected' | 'main';
};

function CE_IconMenu({
  image,
  title,
  variant = 'main',
  hover = 'main',
}: T_IconMenuProps) {
  return (
    <div
      className={[
        'text-center cursor-pointer relative group h-full',
        `${
          hover === 'selected'
            ? 'border-[.2rem] border-dashed hover:border-solid p-5 rounded-xl'
            : 'px-5 pb-5'
        }`,
      ].join(' ')}
    >
      <div
        className={[
          'w-14 h-14 mdmax:w-10 mdmax:h-10 mb-4',
          `${
            variant === 'main'
              ? 'inline-block'
              : 'rounded-full shadow-md inline-flex items-center justify-center'
          }`,
        ].join(' ')}
      >
        <Image
          extern={variant === 'config' ? false : true}
          src={image}
          alt="image"
          width={200}
          height={200}
          className={[
            `${variant === 'main' ? 'w-full h-full' : 'w-[60%] h-[60%]'}`,
            'object-contain',
          ].join(' ')}
        />
      </div>
      {variant === 'main' && (
        <>
          <div className="uppercase text-base text-line-2 font-semibold h-[3rem] mdmax:h-[1rem] mdmax:text-xs">
            {title}
          </div>
          {hover === 'main' && (
            <div className="absolute bottom-0 left-0 w-full h-2 px-5">
              <div className="bg-red-01 w-full h-2 rounded-full transition-all ease-in-out duration-300 group-hover:opacity-100 opacity-0"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function CE_IconMain({
  maxListShow = 1,
  list: initialList,
  cookiesName,
}: T_IconMainProps) {
  const [list, setList] = useState(initialList);
  const [showModal, setShowModal] = useState(false);
  const isMaxActiveList = useMemo(() => {
    return list.filter((item) => item.active === true).length === maxListShow;
  }, [maxListShow, list]);

  const handleChooseMenu = async (index: number) => {
    if (isMaxActiveList && list.at(index)?.active === false) {
      return false;
    }
    const returnList = list.map((item, itemIndex) => {
      return {
        ...item,
        active: itemIndex === index ? !item.active : item.active,
      };
    });
    setList(returnList);
    await SFN_SetPersonalizedMenu('set', cookiesName, returnList);
  };

  return (
    <>
      <div className="overflow-hidden relative py-10 container">
        <div className="border-b-2 border-black border-opacity-50 px-[20rem] mdmax:px-0">
          <div className="flex justify-center -mx-5 mdmax:flex-wrap">
            {list.map((listItem, listIndex) => {
              return (
                listItem.active && (
                  <div className="w-1/5 mdmax:w-1/2 flex-none">
                    <Link
                      href={listItem.link}
                      extern={listItem.externalLink}
                      target={listItem.externalLink ? '_blank' : ''}
                    >
                      <CE_IconMenu
                        key={listIndex}
                        image={`${listItem.image}`}
                        title={listItem.title}
                      />
                    </Link>
                  </div>
                )
              );
            })}
            {list.length > maxListShow && (
              <div
                className="w-1/5 mdmax:w-1/2 flex-none"
                onClick={() => setShowModal(true)}
              >
                <CE_IconMenu
                  image="/images/icon-menu/config.png"
                  variant="config"
                />
              </div>
            )}
          </div>
        </div>
        <Modal open={showModal} setOpen={setShowModal}>
          <div>
            <div className="text-center font-semibold text-xl mdmax:text-lg mb-2">
              Personalisasi Link Cepat
            </div>
            <div className="text-center mdmax:text-xs mb-4">
              Silakan dan pilih hingga {maxListShow} link cepat rutin perbankan
              favorit Anda.
            </div>
            <div className="flex justify-center flex-wrap -mx-2">
              {list.map((listItem, listIndex) => {
                return (
                  <div
                    key={listIndex}
                    className="w-1/4 mdmax:w-1/3 px-2 mb-4 h-full"
                  >
                    <div
                      onClick={() => handleChooseMenu(listIndex)}
                      className="relative"
                    >
                      <div className="absolute -top-2 -right-2 z-10">
                        {listItem.active ? (
                          <svg
                            className="text-red-01"
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"
                            />
                          </svg>
                        ) : (
                          <svg
                            className={[
                              isMaxActiveList
                                ? 'text-gray-200'
                                : 'text-blue-01',
                            ].join(' ')}
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="relative z-0">
                        <CE_IconMenu
                          key={listIndex}
                          image={`${listItem.image}`}
                          title={listItem.title}
                          hover="selected"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
