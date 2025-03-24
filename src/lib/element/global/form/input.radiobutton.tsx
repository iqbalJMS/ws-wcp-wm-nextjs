import React, { useState } from 'react';

type T_InputRadioButtonValue = string | string[];

export type T_InputRadioButtonList = {
  value: string;
  title: string;
};

type T_InputRadioButtonProps = {
  value: T_InputRadioButtonValue;
  list: T_InputRadioButtonList[] | undefined;
  listType?: 'row' | 'column';
  multiple?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: T_InputRadioButtonValue) => void;
};

const InputRadioButton: React.FC<T_InputRadioButtonProps> = ({
  value,
  list,
  listType = 'row',
  multiple = false,
  onChange,
}) => {
  const [selectedValues, setSelectedValues] =
    useState<T_InputRadioButtonValue>(value);

  const handleClick = (value: string) => {
    if (multiple) {
      let updatedValues: string[] = Array.isArray(selectedValues)
        ? [...selectedValues]
        : [];
      if (updatedValues.includes(value)) {
        updatedValues = updatedValues.filter((item) => item !== value);
      } else {
        updatedValues.push(value);
      }
      setSelectedValues(updatedValues);
      onChange(updatedValues);
    } else {
      setSelectedValues(value);
      onChange(value);
    }
  };

  const isActive = (value: string): boolean => {
    if (multiple) {
      return Array.isArray(selectedValues) && selectedValues.includes(value);
    } else {
      return selectedValues === value;
    }
  };

  return (
    <div
      className={`flex ${listType === 'row' ? 'flex-row' : 'flex-col justify-center'} gap-2 mdmax:flex-wrap -mx-2`}
    >
      {list?.map((listItem) => (
        <div key={listItem.value} className="px-2">
          <div
            className="inline-flex items-center cursor-pointer pt-3 "
            onClick={() => handleClick(listItem.value)}
          >
            <div
              className={`w-4 h-4   flex items-center justify-center ${
                multiple ? 'rounded-md' : 'rounded-full'
              } ${isActive(listItem.value) ? ' border-4 border-wmcolor bg-white' : 'bg-wmcolor'}`}
            ></div>
            <div className="ml-2">
              <div className="text-sm">{listItem.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputRadioButton;
