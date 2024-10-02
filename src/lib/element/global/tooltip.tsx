'use client';

type T_TooltipProps = {
  description: string;
};
export function Tooltip({ description }: T_TooltipProps) {
  return (
    <div className="relative group/tooltip">
      <div>
        <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 256 256">
          <path
            fill="currentColor"
            d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
          />
        </svg>
      </div>
      <div className="invisible group-hover/tooltip:visible absolute font-normal text-xs p-2 rounded-md bg-opacity-80 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black w-[20rem] text-white">
        {description}
      </div>
    </div>
  );
}
