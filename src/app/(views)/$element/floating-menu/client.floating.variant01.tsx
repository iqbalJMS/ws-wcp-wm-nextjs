import Link from '@/lib/element/global/link';
import Image from 'next/image';

export default function CE_FloatingVariant01({
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
      <div className="fixed top-[20%] right-0 z-20">
        <div className="transform translate-x-[6rem] hover:translate-x-0 cursor-pointer transition-all ease-in-out duration-300">
          {data?.map((item, index) => {
            return (
              <div key={index} className="">
                <Link href={item?.alias} extern={false}>
                  <div className="flex items-center bg-[#444444] hover:bg-wmcolor p-3 px-4 border-b-2 border-white ">
                    <Image
                      className="text-white w-5 h-5 mr-5"
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.icon}`}
                      alt={'icon float navigation'}
                      width={5}
                      height={5}
                    />
                    <div className="text-white text-sm">{item?.title}</div>
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
