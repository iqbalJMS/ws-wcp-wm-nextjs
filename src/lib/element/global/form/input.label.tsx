/* eslint-disable no-unused-vars */
import React from 'react';
import { T_InputState } from '@/lib/element/client/input';

interface InputProps {
  state?: T_InputState;
  label?: string;
  required?: boolean;
  subLabel?: string;
  errorMessage?: string;
  column?: boolean;
  children?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const InputLabel: React.FC<InputProps> = ({
  state = 'init',
  label = '',
  required = false,
  subLabel = '',
  errorMessage = '',
  column = true,
  children,
  rightSlot,
}) => {
  return (
    <div className={`flex ${column ? 'flex-col' : 'items-center'}`}>
      {label && (
        <div className={`${column ? 'mb-1' : 'mr-10'}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className=" text-black text-lg mdmax:text-sm mb-2">
                {label} {required && <span className="text-red-500">*</span>}
              </div>
              {subLabel && (
                <div className="text-xs text-black04 text-opacity-50">
                  {subLabel}
                </div>
              )}
            </div>
            {rightSlot && <div>{rightSlot}</div>}
          </div>
        </div>
      )}

      {children}
      {/* <Transition name="fade-out">
          {errorMessage && (
            <div className="mt-5">
              <AdminsInputsError message={errorMessage} label={label} />
            </div>
          )}
        </Transition> */}
    </div>
  );
};

export default InputLabel;
