// components/GradientSlider.tsx
import React, { useState } from 'react';

interface GradientSliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  onChange?: (_value: number) => void;
}

const InputSlider: React.FC<GradientSliderProps> = ({
  min,
  max,
  step = 1,
  defaultValue = min,
  onChange,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const getBackgroundSize = () => {
    return `${((value - min) / (max - min)) * 100}% `;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        // className="w-full h-2  rounded-lg cursor-pointer focus:outline-none"
        style={{
          background: `linear-gradient(90deg, #c70740 ${getBackgroundSize()}, #e0e0e0 0%)`,
        }}
      />
      <span className="mt-2 text-lg">{value}</span>
    </div>
  );
};

export default InputSlider;
