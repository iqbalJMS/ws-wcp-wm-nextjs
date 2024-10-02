import React from 'react';

export default function Spinner() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"></svg>
    </div>
  );
}
