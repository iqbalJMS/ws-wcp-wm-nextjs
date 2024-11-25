import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function ChevronDown({
  width = 24,
  height = 24,
  className,
  stroke,
}: T_Icon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" />
      <path
        d="M17 9.5L12 14.5L7 9.5"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
