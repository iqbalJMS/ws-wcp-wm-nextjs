import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function ArrowRightIcon({
  className,
  width,
  height,
  fill,
  stroke,
}: T_Icon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M20 12L16 8M20 12L16 16"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
