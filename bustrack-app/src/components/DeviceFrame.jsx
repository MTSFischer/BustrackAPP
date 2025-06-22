import React from 'react';

export default function DeviceFrame({ children }) {
  return (
    <div className="w-[390px] h-[850px] bg-white border-4 border-black rounded-3xl shadow-lg overflow-hidden relative">
      {children}
    </div>
  );
}