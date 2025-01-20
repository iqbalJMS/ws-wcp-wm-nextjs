import { Tabs } from './tabs';


import useForm from '@/lib/hook/useForm';

import { T_Search } from '@/api/search/api.get.search.type';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEffect, useRef, useState, useTransition } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Link from './link';
import Image from './image';

import { T_ApiGetSearchMenu } from '@/api/search/api.get-search-menu.type';
import { CFN_GetSearch, CFN_MapToSearchPayload, CFN_ValidateGetSearchFields, T_GetSearch } from '@/lib/functions/global/cfn.get.search';
import { CFN_GetSearchMenu } from '@/lib/functions/global/cfn.get.search-menu';
import CE_CardVariant09 from './client.card.variant09';
type T_SearchProps = {
  active: boolean;
  setActive: (_active: boolean) => void;
};

export function Search({ active, setActive }: T_SearchProps) {
  const [pending, transiting] = useTransition();
  const elementRef = useRef(null);
  const [loading, setLoading] = useState(false);
  useOnClickOutside(elementRef, () => setActive(false));
  const [tab, setTab] = useState('produk');
  const [menus, setMenus] = useState<T_ApiGetSearchMenu[]>();
  let [total, setTotal] = useState({
    produk: 0,
    berita: 0,
    laporan: 0,
    promo: 0,
  });
  const { form, onFieldChange, validateForm } = useForm<
    T_GetSearch,
    T_GetSearch
  >(
    CFN_MapToSearchPayload({
      category: '',
      filter: '',
      parent: '',
      page: 1,
    }),
    CFN_ValidateGetSearchFields
  );
  let [result, setResult] = useState<T_Search['list']>([]);
  let [pagination, setPagination] = useState<T_Search['pagination']>();
  const handleSearch = () => {
    setResult([]);
    setPagination(undefined);
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      CFN_GetSearch(transiting, form, (data) => {
        setLoading(false);
        if (data?.data.list && (data?.data.list.length || 0) > 0) {
          setResult(data?.data.list);
          setPagination(data.data.pagination);
          setTotal({
            ...total,
            [form.category]: data.data.pagination.totalData,
          });
        } else {
          setTotal({
            ...total,
            [form.category]: 0,
          });
        }
      });
    }
  };

  const generateLink = (item: T_ApiGetSearchMenu) => {
    if (!item) {
      return '';
    }
    if (item.alias) {
      return `/${item.alias?.toLowerCase().replaceAll(' ', '-')}`;
    }
    if (item.uri) {
      return item.uri;
    }

    return '/';
  };
  useEffect(() => {
    CFN_GetSearchMenu(transiting, (data) => {
      setMenus(data);
    });
  }, []);

  useEffect(() => {
    onFieldChange('page', 1);
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.filter, form.category]);
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.page]);
  useEffect(() => {
    onFieldChange('category', tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div
      ref={elementRef}
      className={[
        'fixed  left-0 w-full max-h-screen bg-white z-50 overflow-auto overflow-custom transition-all ease-in-out duration-300',
        active ? 'top-0' : '-top-full',
      ].join(' ')}
    >
      <div
        className="absolute top-2 right-4 cursor-pointer flex gap-2 items-center text-sm"
        onClick={() => setActive(false)}
      >
        {/* <CloseIcon className="text-blue-02 cursor-pointer" /> */}
        Tutup
      </div>
      <div className="py-20 container">
        <div className="pb-10 border-b border-black">
          <div className="text-center text-2xl mdmax:text-base font-semibold mb-5">
            Temukan yang Anda Butuhkan
          </div>
          <div className="text-center">
            <div className="border border-black rounded-full inline-flex items-center overflow-hidden px-5 py-2 w-[60%] mdmax:w-full">
              <input
                type="text"
                className="focus:outline-none flex-1"
                onChange={(event) =>
                  onFieldChange('filter', event.target.value)
                }
                value={form.filter}
              />

              <div>
                <svg
                  className="w-7 h-7"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            list={[
              {
                title: 'PRODUK',
                slug: 'produk',
                subTitle: `Total ${total.produk.toString()}`,
              },
              {
                title: 'BERITA',
                slug: 'berita',
                subTitle: `Total ${total.berita.toString()}`,
              },
              {
                title: 'LAPORAN',
                slug: 'laporan',
                subTitle: `Total ${total.laporan.toString()}`,
              },
              {
                title: 'PROMO',
                slug: 'promo',
                subTitle: `Total ${total.promo.toString()}`,
              },
            ]}
            value={tab}
            margin="my-6"
            variant="border"
            // variantColor="red"
            onChange={(value) => setTab(value)}
          />
        </div>
        <div>
          {loading && (
            <div className="text-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-bluedark01 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          <div className="max-h-[22rem] overflow-auto overflow-custom">
            {tab === 'produk' && (
              <div className="flex flex-wrap">
                {result.map((dataItem, index) => (
                  <div
                    key={index}
                    className="w-1/3 mdmax:w-1/2 flex-none px-2 mb-4"
                  >
                    <Link href={dataItem.service_url || ''} target="_blank">
                      <div className="shadow-lg relative rounded-md rounded-br-[3rem] overflow-hidden group p-4">
                        <div className="h-[10rem] ">
                          {dataItem.image.url && (
                            <Image
                              extern={true}
                              src={dataItem.image.url}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-contain"
                            />
                          )}
                          {dataItem.image.base64 && (
                            <Image
                              extern={true}
                              src={dataItem.image.base64}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        <div className="mt-2">
                          {dataItem.title && (
                            <div className=" text-blue-01 text-2xl font-semibold text-line-2 mb-2">
                              {parseHTMLToReact(dataItem.title)}
                            </div>
                          )}
                          {dataItem.content && (
                            <div className=" text-blue-02 text-line-2 mb-2">
                              {parseHTMLToReact(dataItem.content)}
                            </div>
                          )}
                          <div className="text-right">
                            <Link
                              href={dataItem.service_url || ''}
                              target="_blank"
                            >
                              <div className="w-10 h-10 rounded-full border border-blue-01 border-opacity-80 inline-flex items-center justify-center text-blue-01">
                                &#10095;
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {tab === 'berita' && (
              <div className="flex flex-wrap">
                {result.map((dataItem, index) => (
                  <div
                    key={index}
                    className="w-1/3 mdmax:w-1/2 flex-none px-2 mb-4"
                  >
                    <Link href={dataItem.service_url || ''} target="_blank">
                      <div className="shadow-lg relative rounded-md overflow-hidden group">
                        <div className="w-full h-[18rem] ">
                          {dataItem.image.url && (
                            <Image
                              extern={true}
                              src={dataItem.image.url}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {dataItem.image.base64 && (
                            <Image
                              extern={true}
                              src={dataItem.image.base64}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="absolute z-10 top-0 left-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 w-full h-full"></div>
                        <div className="absolute z-20 bottom-0 left-0 p-4 ">
                          {dataItem.title && (
                            <div className=" text-white text-2xl font-semibold text-line-2">
                              {parseHTMLToReact(dataItem.title)}
                            </div>
                          )}
                          {dataItem.content && (
                            <div className=" text-white text-line-2">
                              {parseHTMLToReact(dataItem.content)}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {tab === 'promo' && (
              <div className="flex flex-wrap">
                {result.map((dataItem, index) => (
                  <div
                    key={index}
                    className="w-1/3 mdmax:w-1/2 flex-none px-2 mb-4"
                  >
                    <Link href={dataItem.service_url || ''} target="_blank">
                      <div className="shadow-lg relative rounded-md overflow-hidden group p-4">
                        <div className="w-full h-[15rem] rounded-md overflow-hidden">
                          {dataItem.image.url && (
                            <Image
                              extern={true}
                              src={dataItem.image.url}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {dataItem.image.base64 && (
                            <Image
                              extern={true}
                              src={dataItem.image.base64}
                              alt="image"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        <div className="mt-2">
                          {dataItem.title && (
                            <div className=" text-red-01 text-2xl font-semibold text-line-2">
                              {parseHTMLToReact(dataItem.title)}
                            </div>
                          )}
                          {dataItem.content && (
                            <div className=" text-black text-line-3 body">
                              {parseHTMLToReact(dataItem.content)}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {tab === 'laporan' && (
              <div>
                <CE_CardVariant09
                  type="search"
                  data={result.map((item) => {
                    return {
                      title: item.title,
                      description: 'Dokumen PDF',
                      button: {
                        title: 'Unduh',
                        link: item.service_url || 'https://bri.co.id',
                        extern: true,
                        image: 'have',
                      },
                    };
                  })}
                />
              </div>
            )}
          </div>

          {pagination && (
            <div className="flex items-center mt-10 justify-center gap-5 mdmax:gap-1">
              <button
                className={[
                  'w-8 h-8 mdmax:w-8 mdmax:h-8 bg-bluedark01 text-white',
                  pagination?.isPrev
                    ? 'cursor-pointer'
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={() =>
                  pagination?.isPrev && onFieldChange('page', form.page - 1)
                }
              >
                &#10094;
              </button>
              <div>
                {form.page} / {pagination.totalPages}
              </div>
              <button
                className={[
                  'w-8 h-8 mdmax:w-8 mdmax:h-8 bg-bluedark01 text-white',
                  pagination?.isNext
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={() =>
                  pagination?.isNext && onFieldChange('page', form.page + 1)
                }
              >
                &#10095;
              </button>
            </div>
          )}

          <div className="text-center py-10">
            <div className="text-2xl mdmax:text-sm font-bold">
              Tidak dapat menemukan{' '}
              <span className="text-bluedark01">apa yang kalian cari?</span>
            </div>
            <div className="mdmax:text-xs">
              Carilah jawaban pada{' '}
              <Link
                className="underline font-semibold"
                href={'https://bri.co.id/web/bri/bantuan'}
              >
                halaman FAQ
              </Link>{' '}
              atau arahkan ke kategori konten berikut
            </div>
          </div>
        </div>
        <div className="flex justify-center px-[10rem] mdmax:hidden">
          {menus?.map((subItem, subIndex) => {
            return (
              <div key={subIndex} className="mr-16">
                
                <Link href={generateLink(subItem)}>
                  <div className="text-bluedark01 font-semibold mb-2">
                    {subItem?.title}
                  </div>
                </Link>
                <div>
                  {subItem?.below?.map((item, itemIndex) => {
                    return (
                      <div key={itemIndex}>
                        <Link href={generateLink(item)}>
                          <div className="flex items-center justify-between">
                            {item.title}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
