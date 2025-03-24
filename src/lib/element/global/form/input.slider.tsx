// components/GradientSlider.tsx
import React, { useMemo } from 'react';

interface GradientSliderProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  benchMin?: number;
  benchMax?: number;
  onChange?: (_value: number) => void;
}

const InputSlider: React.FC<GradientSliderProps> = ({
  min,
  max,
  step = 1,
  value: defaultValue = min,
  onChange,
  benchMax,
  benchMin,
}) => {
  const value = useMemo(() => {
    return defaultValue;
  }, [defaultValue]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (onChange) onChange(newValue);
  };

  const getBackgroundSize = () => {
    return `${((value - min) / (max - min)) * 100}% `;
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
        style={{
          background: `linear-gradient(90deg, #080087 ${getBackgroundSize()}, #E5E5E5 0%)`,
          cursor: 'pointer',
        }}
      />
      <div className="flex justify-between items-center w-full pt-1">
        {benchMin ? <h1 className="mt-2 text-sm">{benchMin}</h1> : null}
        {benchMax ? <h1 className="mt-2 text-sm">{benchMax}</h1> : null}
      </div>
    </div>
  );
};

export default InputSlider;
