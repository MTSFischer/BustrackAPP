import React from 'react';
import { MapPin } from 'lucide-react';

export function LandingScreen() {
  return (
    <div className="w-[390px] h-[852px] bg-[#D8F0EE] flex flex-col items-center">
      <header className="w-full h-16 bg-[#0C9B8A] flex items-center justify-center relative">
        <h2 className="text-white text-xl font-bold">BusTrack</h2>
        <MapPin className="absolute right-4 text-white w-6 h-6" />
      </header>

      <h3 className="mt-6 text-center text-xl font-semibold text-[#03488E]">
        Seu ônibus, sempre no radar
      </h3>

      <div className="mt-6 bg-white rounded-2xl p-4 shadow-md w-[85%]">
        <img
          src="/assets/bus-image.png"
          alt="Ônibus na rua"
          className="w-full h-48 object-cover rounded-xl"
        />
        <p className="mt-4 text-base font-medium text-[#000]">
          Acompanhe em tempo real a localização do seu ônibus e nunca mais perca tempo nas paradas
        </p>
      </div>

      <div className="mt-auto mb-8 flex items-center">
        <button className="w-36 h-12 bg-[#2D50EC] text-white rounded-full shadow-md">
          Entrar
        </button>
        <a href="#" className="ml-4 text-[#03488E]">
          Não tem uma Conta?
        </a>
      </div>
    </div>
  );
}

export default LandingScreen;
