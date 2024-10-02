import { T_Icon } from '@/lib/element/client/icon';

export function ChevronUpIcon({
  width = 24,
  height = 24,
  className = 'stroke-black',
  strokeWidth = '1.5',
}: T_Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15L12 9L6 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
