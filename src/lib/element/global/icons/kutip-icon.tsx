import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';
export default function KutipIcon({
  stroke,
  width,
  height,
  className,
}: T_Icon) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 46.059 40"
        stroke={stroke}
        className={className}
      >
        <path
          id="Path_348"
          data-name="Path 348"
          d="M39.622,43.4a9.1,9.1,0,0,0,0-18.183c-8.833,0-2.945-17.574,8.836-17.574V3.4C27.432,3.4,19.193,43.4,39.622,43.4Zm-25.452,0a9.1,9.1,0,0,0,0-18.183C5.334,25.218,11.221,7.644,23,7.644V3.4C1.98,3.4-6.259,43.4,14.17,43.4Z"
          transform="translate(-2.399 -3.401)"
          fill="#080087"
        />
      </svg>
    </>
  );
}
