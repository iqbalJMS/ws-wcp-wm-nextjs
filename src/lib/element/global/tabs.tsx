'use client';

import { Tooltip } from './tooltip';

type T_TabsProps = {
  list: {
    title: string;
    information?: string;
    slug: string;
  }[];
  value: string;
  onChange: (_value: string) => void;
  variant?: 'full' | 'border-arrow' | 'border';
};
export function Tabs({
  list,
  value,
  onChange,
  variant = 'border',
}: T_TabsProps) {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onChange(item.slug)}
            className={[
              `flex-1 border-b cursor-pointer relative group/tab text-center`,
              variant === 'full' ? 'py-3 ' : 'pb-3 ',
              item.slug === value
                ? variant === 'full'
                  ? 'bg-blue-01'
                  : ''
                : '',
            ].join(' ')}
          >
            <div
              className={[
                'text-xl font-medium  inline-flex items-center',
                `${
                  item.slug === value
                    ? variant === 'full'
                      ? 'text-white'
                      : 'text-blue-01'
                    : 'text-gray-500 group-hover/tab:text-blue-01'
                }`,
              ].join(' ')}
            >
              <div className="mr-2">{item.title}</div>
              {item.information && <Tooltip description={item.information} />}
            </div>
            {variant === 'border-arrow' && (
              <div
                className={[
                  'absolute bottom-0 left-0',
                  'w-full h-[.2rem] bg-blue-01',
                  item.slug === value ? 'visible' : 'invisible',
                  'group-hover/tab:visible',
                ].join(' ')}
              >
                <div
                  className={`
                                    absolute top-[100%] left-1/2 transform -translate-x-1/2 
                                    border-l-[0.5rem] border-r-[0.5rem] border-t-[0.5rem] 
                                    border-l-transparent border-r-transparent border-blue-01
                                    h-1 w-1`}
                ></div>
              </div>
            )}
            {variant === 'border' && (
              <div
                className={[
                  'absolute bottom-0 left-0',
                  'w-full h-[.2rem] bg-blue-01',
                  item.slug === value ? 'visible' : 'invisible',
                  'group-hover/tab:visible',
                ].join(' ')}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
