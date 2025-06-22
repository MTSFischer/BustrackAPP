import React from 'react';
import {
  Menu,
  MapPin,
  User,
  Search,
  Share2,
  MessageSquare,
  Bookmark,
  Bell,
} from 'lucide-react';

// Map Screen (Visual Only)
export default function MapScreen() {
  return (
    <div className="w-[390px] h-[852px] flex flex-col relative bg-[#0C9B8A]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-2">
        <Menu className="w-6 h-6 text-white" />
        <h2 className="text-xl font-bold text-white">BusTrack</h2>
        <User className="w-6 h-6 text-white" />
      </header>

      {/* Search Bar */}
      <div className="px-4 mt-3">
        <div className="flex items-center bg-white rounded-full h-10 px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar linha ou ponto"
            className="ml-2 w-full border-none outline-none text-sm"
          />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative flex-1 mt-4 mx-2 rounded-2xl overflow-hidden bg-gray-200">
        {/* Aqui você pode integrar React Leaflet ou outro mapa */}
        <MapPin className="absolute left-10 top-20 w-6 h-6 text-green-500" />
        <MapPin className="absolute left-32 top-40 w-6 h-6 text-blue-500" />
      </div>

      {/* Overlays */}
      {/* 1. Lista de Linhas */}
      <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
        <ul className="divide-y divide-dotted divide-[#0C9B8A]">
          {[
            ['L14', '5 min'],
            ['L25', '15 min'],
            ['L01', '30 min'],
            ['L27', '45 min'],
            ['L14', '19:20 min'],
            ['L07', '20:25 min'],
          ].map(([line, time], i) => (
            <li key={i} className="flex justify-between py-2">
              <span className="text-sm">{line}</span>
              <span
                className={`text-sm ${
                  time.includes('min') && !time.includes(':')
                    ? 'text-[#0C9B8A]'
                    : ''
                }`}
              >
                {time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Atenção Overlay */}
      <div className="absolute top-24 left-4 right-4 bg-[#0C9B8A] text-white rounded-2xl p-4 shadow-lg">
        <header className="flex justify-between items-center mb-2">
          <span className="font-semibold">Atenção:</span>
          <span className="font-semibold flex items-center">
            BusTrack
            <MapPin className="w-5 h-5 ml-1" />
          </span>
        </header>
        <h3 className="font-bold text-lg mb-1">Ônibus por perto!</h3>
        <p className="text-sm mb-4">Seu ônibus para o Boqueirão está por perto...</p>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2">ver no mapa</button>
      </div>

       {/* 3. Feedback Overlay */}
      <div className="absolute top-24 left-4 right-4 bg-[#0C9B8A] text-white rounded-2xl p-4 shadow-lg">
        <header className="flex justify-between items-center mb-2">
          <span className="font-semibold">Avalie-nos</span>
          <span className="font-semibold flex items-center">
            BusTrack
            <MapPin className="w-5 h-5 ml-1" />
          </span>
        </header>
        <h3 className="font-bold text-lg mb-2">Ajude Avaliando para melhor precisão</h3>
        <div className="flex justify-around mb-4">
          {[
            ['😞', 'Insatisfeito'],
            ['😐', 'Poderia ser melhor'],
            ['😊', 'Satisfeito'],
            ['😁', 'Muito Satisfeito'],
          ].map(([emoji, label], idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl mb-1">{emoji}</span>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2">
          enviar feedback
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around h-16 bg-white rounded-t-full shadow-lg">
        <button className="flex flex-col items-center">
          <MapPin className="w-6 h-6 text-[#0C9B8A]" />
          <span className="text-xs text-[#0C9B8A]">Mapa</span>
        </button>
        <button className="flex flex-col items-center">
          <Bookmark className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Favoritos</span>
        </button>
        <button className="flex flex-col items-center">
          <Bell className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Notificação</span>
        </button>
      </nav>
    </div>
  );
}
