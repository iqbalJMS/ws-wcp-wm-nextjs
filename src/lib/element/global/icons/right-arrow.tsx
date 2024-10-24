import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function RightArrow({ className, width, height, fill }: T_Icon) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
