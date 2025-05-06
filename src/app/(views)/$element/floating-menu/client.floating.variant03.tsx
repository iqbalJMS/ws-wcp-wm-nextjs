import Image from 'next/image';
import Link from 'next/link';

export default function CE_FloatingVariant03({
  data,
}: {
  data: Array<{
    title: string;
    alias: string;
    icon: string;
  }>;
}) {
  return (
    <>
      <div className="fixed top-[20%] right-8 z-30">
        <div className="transform translate-x-[6rem] hover:translate-x-10 cursor-pointer transition-all ease-in-out duration-300">
          {data?.map((item, index) => {
            return (
              <div key={index} className="">
                <Link href={`/${item?.alias ?? '/404'}`}>
                  <div className="flex items-center bg-[#1C286A] hover:bg-[#141333] px-3 lg:p-3 lg:px-4 border-b-2 border-white ">
                    <Image
                      className="text-white w-5 h-5 mr-5"
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.icon ?? ''}`}
                      alt={'icon float navigation'}
                      width={9}
                      height={9}
                    />
                    <div className="text-white text-sm">
                      {item?.title ?? ''}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
