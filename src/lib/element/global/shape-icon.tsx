import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function ShapeIcon({
  width,
  height,
  className,
  stroke,
}: T_Icon) {
  return (
    <svg
      className={className}
      stroke={stroke}
      fill="#DCDCDC"
      width={width}
      height={height}
      viewBox="0 0 2020 3920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1750.176h1920V169H0z" fill-rule="evenodd" />
    </svg>
  );
}
