import React, { useRef } from 'react';
export type T_InputTextOnChange = string | number;
type T_InputTextProps = {
  type?: 'text' | 'password' | 'number';
  value?: T_InputTextOnChange;
  className?: string;
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
  rounded?: 'full' | 'not-full';
};

function useFormat() {
  const number = {
    decimal: (value: number) => new Intl.NumberFormat('en-US').format(value),
    value: (value: string) => value.toString().replace(/,/g, ''),
  };

  return { number };
}

export default function InputText({
  type = 'number',
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
  className,
  rounded = 'not-full',
  //eslint-disable-next-line no-unused-vars
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
    <div>
      <div
        className={`relative flex w-full h-12 items-center border overflow-hidden bg-transparent ${
          disabled ? 'bg-gray-500 bg-opacity-5' : 'bg-transparent'
        } ${
          state === 'error'
            ? 'border-red-500'
            : 'border-none focus-within:border-blue-01 focus-within:border-opacity-50 focus-within:ring-4 focus-within:ring-light-02 focus-within:ring-opacity-30'
        } 
        ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`}
      >
        {leftText ? (
          <div className="flex pl-4 -mr-2 items-center justify-center h-full text-[#505FD3] text-15 leading-15 whitespace-nowrap">
            {leftText}
          </div>
        ) : null}

        {leftSlot ? (
          <div className="flex h-full text-[#505FD3] text-15 leading-15 whitespace-nowrap">
            {leftSlot}
          </div>
        ) : null}

        <input
          ref={inputRef}
          value={formatModelValue()}
          className="w-full h-full text-base mdmax:text-sm text-[#505FD3] placeholder:text-black/50 placeholder:font-medium focus:outline-none bg-transparent flex-1 px-4"
          disabled={disabled}
          type={type === 'password' ? 'password' : 'text'}
          placeholder={placeholder}
          onKeyUp={(event) => event.key === 'Enter' && onEnter && onEnter()}
          onKeyDown={handleIsNumber}
          onInput={handleInput}
        />

        {rightText ? <div className={className}>{rightText}</div> : null}

        {rightSlot ? (
          <div className="flex h-full text-[#505FD3] text-opacity-90 text-15 whitespace-nowrap">
            {rightSlot}
          </div>
        ) : null}
      </div>
    </div>
  );
}
