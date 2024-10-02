import { T_Icon } from '@/lib/element/client/icon';

export function ChevronDownIcon({
  width = 24,
  height = 24,
  className = 'stroke-black',
  strokeWidth = '1.5',
}: T_Icon) {
  return (
    <svg
      width={width}
      className={className}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
