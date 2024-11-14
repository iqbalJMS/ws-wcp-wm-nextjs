import { T_Icon } from '@/lib/element/client/icon';

export function MinusIcon({
  width = 18,
  height = 18,
  strokeWidth = '1.5',
  className = 'stroke-black',
}: T_Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={height}
      className={className}
    >
      <path
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
