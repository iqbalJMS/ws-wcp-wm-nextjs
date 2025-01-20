import React from "react";

interface T_InputErrorProps {
  message?: string;
}

const InputError: React.FC<T_InputErrorProps> = ({ message = "" }) => {
  return (
    <div>
      {message && <div className="text-sm text-red-500 mt-1">{message}</div>}
    </div>
  );
};

export default InputError;
