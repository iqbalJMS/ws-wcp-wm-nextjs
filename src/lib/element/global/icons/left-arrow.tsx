import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function LeftArrow({ className, fill, width, height }: T_Icon) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
