import React, { useEffect, useState } from 'react';
import { CloseIcon } from './close-icon';

type T_ModalProps = {
  setOpen: (_active: boolean) => void;
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Modal({
  open,
  setOpen,
  children,
  onClose,
}: T_ModalProps) {
  const [hasOpen, setHasOpen] = useState(false);

  useEffect(() => {
    if (open === false && hasOpen === true && onClose) {
      setHasOpen(false);
      onClose();
    } else {
      setHasOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div
      className={`${open ? 'fixed' : 'hidden'} top-0 left-0 z-50 w-full h-screen flex items-center justify-center `}
    >
      <div
        onClick={() => setOpen(false)}
        className="w-full h-full bg-black bg-opacity-10 absolute top-0 left-0"
      ></div>
      <div className="w-[40%] mdmax:w-[90%] p-7 mdmax:p-2 mdmax:py-8  bg-white rounded-xl relative z-10">
        <div
          className="absolute top-7 right-7 mdmax:top-2 mdmax:right-2"
          onClick={() => setOpen(false)}
        >
          <CloseIcon className="text-blue-02 cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
}
