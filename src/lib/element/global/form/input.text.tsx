import React, { useRef } from 'react';
export type T_InputTextOnChange = string | number;
type T_InputTextProps = {
  type?: 'text' | 'password' | 'number';
  value?: T_InputTextOnChange;
  placeholder?: string;
  label?: string;
  rightText?: string;
  leftText?: string;
  disabled?: boolean;
  state?: 'init' | 'error';
  onEnter?: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: T_InputTextOnChange) => void;
  children?: React.ReactNode;
  rightSlot?: React.ReactNode;
  leftSlot?: React.ReactNode;
  forInputPhone?: boolean;
};

function useFormat() {
  const number = {
    decimal: (value: number) => value,
    value: (value: string) => parseFloat(value),
  };

  return { number };
}

export default function InputText({
  type = 'text',
  value = '',
  placeholder = '',
  label = '',
  rightText = '',
  leftText = '',
  disabled = false,
  state = 'init',
  onEnter,
  onChange,
  rightSlot,
  leftSlot,
  forInputPhone,
}: T_InputTextProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { number } = useFormat();

  const formatModelValue = () => {
    if (type === 'number') {
      return number.decimal(Number(value || 0));
    }
    return value ? value.toString().replace(label, '') : '';
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      onChange?.(number.value(event.target.value || '0'));
    } else if (type === 'text' || type === 'password') {
      if (label) {
        onChange?.(`${label}${event.target.value}`);
      } else {
        onChange?.(event.target.value);
      }
    }
  };

  const handleIsNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      if (type === 'number') {
        event.preventDefault();
      }
    } else {
      return true;
    }
  };

  return (
    <>
      <div
        className={`flex py-1  w-full h-12 items-center border border-solid overflow-hidden rounded-2xl bg-transparent ${
          disabled ? 'bg-gray-500 bg-opacity-5' : 'bg-transparent'
        } ${
          state === 'error'
            ? 'border-red-500'
            : 'border-black focus-within:border-blue-01 focus-within:border-opacity-50 focus-within:ring-4 focus-within:ring-light-02 focus-within:ring-opacity-30'
        } ${forInputPhone ? 'pl-28' : 'px-4'}`}
      >
        {leftSlot || leftText ? (
          <div
            className={`flex  items-center justify-center h-full text-black02 text-15 leading-15 whitespace-nowrap mr-10`}
          >
            {leftSlot}
            {leftText}
          </div>
        ) : null}

        <input
          ref={inputRef}
          value={formatModelValue()}
          className="w-full h-full text-base mdmax:text-sm placeholder:text-black/50 placeholder:font-medium focus:outline-none bg-transparent flex-1"
          disabled={disabled}
          type={type === 'password' ? 'password' : 'text'}
          placeholder={placeholder}
          onKeyUp={(event) => event.key === 'Enter' && onEnter && onEnter()}
          onKeyDown={handleIsNumber}
          onInput={handleInput}
        />
        {rightSlot || rightText ? (
          <div
            className={`flex items-center justify-center h-full text-black02 text-opacity-90 text-15 whitespace-nowrap ml-10`}
          >
            {rightSlot}
            {rightText}
          </div>
        ) : null}
      </div>
    </>
  );
}
