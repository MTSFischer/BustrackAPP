import React from 'react';
import { MapPin, Bus } from 'lucide-react';

export function IntroScreen() {
  return (
    <div className="w-[390px] h-[852px] bg-[#0C9B8A] flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <MapPin className="w-full h-full text-white" />
        <Bus className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0C9B8A] w-12 h-12" />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-white">BusTrack</h1>
    </div>
  );
}

export default IntroScreen;
