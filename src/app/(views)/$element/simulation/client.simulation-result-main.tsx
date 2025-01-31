// import { CloseIcon } from '@/lib/element/global/icons/close-icon';
import { ReactNode } from 'react';

type T_SimulationresultMainProps = {
  children: ReactNode;
  onClose: () => void;
};

const CE_SimulationResultMain = ({
  children,
  // onClose,
}: T_SimulationresultMainProps) => {
  return (
    <div className="mt-10 p-10 border-t border-black border-opacity-30 relative">
      <div>{children}</div>
    </div>
  );
};

export default CE_SimulationResultMain;
