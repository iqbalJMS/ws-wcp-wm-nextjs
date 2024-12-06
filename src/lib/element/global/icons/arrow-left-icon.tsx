import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function ArrowLeftIcon({
  className,
  width,
  height,
  stroke,
  fill,
}: T_Icon) {
  return (
    <main>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12H20M4 12L8 8M4 12L8 16"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </main>
  );
}
