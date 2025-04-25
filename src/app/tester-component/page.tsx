import Link from 'next/link';
import React from 'react';

export default function page() {
  const LIST_NAV = [
    {
      value: 'tester-2',
    },
    {
      value: 'tester-3',
    },
  ];
  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center">
      <div className="w-96 h-96 bg-blue-300">
        {LIST_NAV.map((item, index) => (
          <Link
            key={index}
            href={`/${item?.value}`}
            className="text-lg text-black hover:border-b-privatecolor focus:border-b-privatecolor border-2"
          >
            {item?.value}
          </Link>
        ))}
      </div>
    </div>
  );
}
