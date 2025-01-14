'use client';

import React, { useState, useTransition, useEffect } from 'react';
import LocationIcon from '@/lib/element/global/location-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import {
  T_ResponGetLocation,
  T_LocationRequest,
} from '@/api/location/api.get-location.type';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetLocation,
  CFN_MapToLocationPayload,
  CFN_ValidateGetLocationFields,
} from '@/app/(views)/$function/cfn.get-location';
import Pagination from '@/lib/element/global/pagination';
import CE_SearchOutlet from '@/app/(views)/$element/search/client.search-outlet';
import { CE_TabsOutlet } from '@/app/(views)/$element/search/client.tab-outlet';

export default function CE_Location({ variant }: { variant: string }) {
  const [pending, transiting] = useTransition();
  const [location, setLocation] = useState<T_ResponGetLocation>();
  const { form, validateForm, onFieldChange } = useForm<
    T_LocationRequest,
    T_LocationRequest
  >(
    CFN_MapToLocationPayload({
      skip: '0',
      limit: '9',
      name: '',
      tipe:
        variant == 'wm-prioritas-main-navigation'
          ? '6762525d2b83df62275f6f62'
          : '',
    }),
    CFN_ValidateGetLocationFields
  );

  let handlePageChange = (page: number) => {
    const skip = parseInt(form.limit) * page - parseInt(form.limit);
    onFieldChange('skip', skip.toString());
  };

  const handleTabChange = (tab: string) => {
    onFieldChange('tipe', tab.toString());
  };

  const handleSearchChange = (keyword: string) => {
    onFieldChange('name', keyword.toString());
  };

  const handleLocationList = () => {
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      CFN_GetLocation(transiting, form, (data) => {
        setLocation(data?.data);
      });
    }
  };

  useEffect(() => {
    handleLocationList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.skip, form.tipe, form.name]);

  let colorTheme = '';
  if (variant === 'wm-prioritas-main-navigation') {
    colorTheme = 'prioritycolor';
  } else {
    colorTheme = 'wmcolor';
  }

  return (
    <>
      {/* <CE_FormGetInvited /> */}
      <CE_SearchOutlet
        onChange={(e) => handleSearchChange(e)}
        variant={variant}
      />
      {variant == 'wm-prioritas-main-navigation' ? (
        <CE_TabsOutlet
          list={[
            {
              title: 'SENTRA LAYANAN BRI PRIORITAS',
              slug: '6762525d2b83df62275f6f62',
            },
            { title: 'BRI PRIORITY LOUNGE', slug: '676251ed2b83df62275f6f5d' },
          ]}
          value={form.tipe}
          onChange={(e) => handleTabChange(e)}
        />
      ) : null}
      <div className="w-full flex flex-col items-center justify-center py-10">
        <section className="w-full 2xl:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 place-items-center">
          {location?.data.map((item, index) => (
            <div
              key={index}
              className="bg-white-02 object h-60 w-72 xl:w-96 rounded-2xl flex flex-col justify-between p-5 border border-gray-300 shadow-2xl"
            >
              <div className="space-y-3">
                <h1
                  className={`uppercase text-${colorTheme} text-xl font-extrabold hover:underline cursor-pointer`}
                >
                  {item.name}
                </h1>
                <h2 className="text-[#7D809D] font-light text-sm line-clamp-2">
                  {parseHTMLToReact(item.address)}
                </h2>
                <h3 className="text-sm text-[#7D809D]">{item.phone}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <LocationIcon className="" width={20} stroke="#070059" />
                <a
                  target="_blank"
                  href={`${item?.urlMaps}`}
                  className="text-[#3E4182] text-base hover:underline"
                >
                  Lihat di Peta
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className="w-full 2xl:w-8/12 flex justify-end pt-10 ">
          <Pagination
            currentPage={location?.pagination?.currentPage || 1}
            totalPages={location?.pagination?.totalPages || 0}
            variant={'simple'}
            onPageChange={(e) => handlePageChange(e)}
            color={variant}
          />
        </section>
      </div>
    </>
  );
}
