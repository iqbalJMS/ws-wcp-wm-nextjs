import { T_Icon } from '@/lib/element/client/icon';

export function ChevronRightIcon({
  width = 18,
  height = 18,
  strokeWidth = '1.5',
  className = 'stroke-black',
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
        d="M9 18L15 12L9 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
