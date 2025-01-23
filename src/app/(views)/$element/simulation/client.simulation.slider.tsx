'use client';

import { ReactNode, useState } from 'react';

type T_SimulationLabelProps = {
  label: string;
  slot?: ReactNode;
  editable?: boolean;
  onChange?: (_value: boolean) => void;
};

const CE_SimulationLabel = ({
  label,
  slot,
  editable = true,
  onChange,
}: T_SimulationLabelProps) => {
  const [hasEdit, setHasEdit] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-xl font-semibold text-black ">{label}</div>
        {editable && (
          <div
            className="text-black text-opacity-50 cursor-pointer"
            onClick={() => {
              setHasEdit(!hasEdit);
              if (onChange) onChange(hasEdit);
            }}
          >
            {!hasEdit ? (
              <svg
                className="w-5 h-5"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"
                />
              </svg>
            )}
          </div>
        )}
      </div>
      <div>{slot}</div>
    </div>
  );
};

export default CE_SimulationLabel;
