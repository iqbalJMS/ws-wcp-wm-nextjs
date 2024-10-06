import React from 'react';
import { T_Icon } from '@/lib/element/client/icon';

export default function ProtectionIcon({
  width,
  height,
  className,
  fill,
}: T_Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill}
    >
      <style type="text/css"></style>
      <path
        className="st0"
        d="M25,6.7c-3.4,0-6.6-1.4-9-3.7c-2.4,2.3-5.6,3.7-9,3.7C5.6,6.7,4.3,6.4,3,6c0,14,5.5,19.6,13,23
   c7.5-3.4,13-9,13-23C27.7,6.4,26.4,6.7,25,6.7z"
      />
      <path
        className="st0"
        d="M19,22h-6c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v4C21,21.1,20.1,22,19,22z"
      />
      <path
        className="st0"
        d="M20,14h-8v-2c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4V14z"
      />
      <line className="st0" x1="16" y1="17" x2="16" y2="19" />
    </svg>
  );
}
