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
      stroke={stroke}
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1290.761 331.004 1134.86 486.905l363.071 363.071H0v220.511h1497.931l-363.071 363.071 155.901 155.902 629.228-629.228z"
        fill-rule="evenodd"
      />
    </svg>
  );
}
