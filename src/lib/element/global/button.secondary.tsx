import { FC, ReactNode, useMemo } from 'react';

type T_ButtonSecondaryProps = {
  state?: 'init' | 'loading' | 'success';
  variant?: 'background' | 'border';
  color?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'full' | 'not-full';
  disabled?: boolean;
  children?: ReactNode;
};

type T_ButtonProps = T_ButtonSecondaryProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSecondary: FC<T_ButtonProps> = ({
  state = 'init',
  variant = 'background',
  color = 'black',
  size = 'md',
  rounded = 'not-full',
  disabled = false,
  children,
  className,
  ...buttonProps
}) => {
  const buttonSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return `px-5 h-6 text-xs ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`;
      case 'md':
        return `px-8 h-10 text-base mdmax:h-8 mdmax:text-sm mdmax:px-4 ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`;
      case 'lg':
        return `px-8 h-14 text-xl mdmax:px-5 mdmax:h-10 mdmax:text-base ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`;
      case 'xl':
        return `px-8 h-20 text-2xl mdmax:px-5 mdmax:h-10 mdmax:text-base ${rounded === 'full' ? 'rounded-full' : 'rounded-md'}`;
      default:
        return '';
    }
  }, [size, rounded]);

  const buttonTextColor = useMemo(() => {
    switch (color) {
      case 'white':
        return 'green02';
      default:
        return 'white';
    }
  }, [color]);

  const buttonClasses = [
    'font-medium relative overflow-hidden group inline-flex items-center justify-center',
    `focus:ring-4 focus:ring-${color} focus:ring-opacity-20`,
    buttonSize,
    state === 'init' && variant === 'background' && !disabled
      ? `bg-${color} text-${buttonTextColor}`
      : '',
    state === 'init' && variant === 'border' && !disabled
      ? `border border-${color} text-${color} hover:bg-${color} hover:text-${buttonTextColor}`
      : '',
    state !== 'init' || disabled
      ? 'bg-black bg-opacity-10 text-black text-opacity-10'
      : '',
    state !== 'loading' && state !== 'success' ? 'cursor-pointer' : '',
    `${className}`,
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={state !== 'init' || disabled}
      {...buttonProps}
    >
      <div
        className={[
          'absolute top-0 w-full h-full bg-green-500 transition-all ease-in-out duration-300 z-0',
          state === 'success' ? 'left-0 rounded-0' : '-left-full rounded-r-20',
        ].join(' ')}
      ></div>
      <div className="relative z-10 font-semibold tracking-wide inline-flex items-center gap-10">
        {state === 'init' && children}
        {/* {state === 'loading' && (
          <Icon name="pajamas:redo" className="text-white animate-spin h-1/2" />
        )}
        {state === 'success' && (
          <IconCustom name="checklist" className="w-16 h-16 text-white" />
        )} */}
      </div>
    </button>
  );
};

// const Icon: React.FC<{ name: string; className: string }> = ({ name, className }) => {
//   // Replace with your icon logic
//   return <i className={className}></i>;
// };

// const IconCustom: React.FC<{ name: string; className: string }> = ({ name, className }) => {
//   // Replace with your custom icon logic
//   return <i className={className}></i>;
// };

export default ButtonSecondary;
