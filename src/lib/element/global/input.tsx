'use client';

import React, { useState, useMemo } from 'react';

type T_InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (_value: string) => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: 'rounded' | 'full' | 'square';
};

const Input: React.FC<T_InputProps> = ({
  placeholder = 'Enter your ...',
  value = '',
  onChange,
  prefixIcon,
  suffixIcon,
  variant = 'rounded',
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const containerClassNames = useMemo(() => {
    let baseStyles =
      'flex items-center w-full px-2 py-2 bg-white border border-gray-300 focus-within:ring focus-within:border-blue-300';
    let shapeStyles = '';

    switch (variant) {
      case 'rounded':
        shapeStyles = 'rounded-lg';
        break;
      case 'full':
        shapeStyles = 'rounded-full';
        break;
      case 'square':
        shapeStyles = 'rounded-none';
        break;
      default:
        shapeStyles = 'rounded-lg';
    }

    return `${baseStyles} ${shapeStyles}`;
  }, [variant]);

  return (
    <div className={containerClassNames}>
      {prefixIcon && <span className="px-2 text-gray-500">{prefixIcon}</span>}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 px-2 py-1 bg-transparent focus:outline-none"
      />
      {suffixIcon && <span className="px-2 text-gray-500">{suffixIcon}</span>}
    </div>
  );
};

export default Input;
