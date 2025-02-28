import { T_Icon } from '@/lib/element/client/icon';

export function ArrowDownIcon({ width = 16, height = 9, className }: T_Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.686238 1.06271C0.932059 0.820392 1.32778 0.823229 1.5701 1.06905L7.22982 6.81051C7.65344 7.24025 8.34656 7.24025 8.77018 6.81051L14.4299 1.06905C14.6722 0.823229 15.0679 0.820392 15.3138 1.06271C15.5596 1.30504 15.5624 1.70075 15.3201 1.94657L9.66038 7.68803C8.74719 8.61441 7.25281 8.61441 6.33962 7.68803L0.679902 1.94657C0.43758 1.70075 0.440417 1.30504 0.686238 1.06271Z"
        fill="currentColor"
      />
    </svg>
  );
}
