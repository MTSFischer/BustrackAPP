import React from 'react';
import { ArrowLeft, User, Edit2, Bell, HelpCircle } from 'lucide-react';

// Profile Screen (Visual Only)
export default function ProfileScreen() {
  return (
    <div className="w-[390px] h-[852px] flex flex-col bg-[#0C9B8A] items-center relative">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-4 pt-4">
        <ArrowLeft className="w-6 h-6 text-white" />
        <h2 className="text-xl font-bold text-white">BusTrack</h2>
        <Bell className="w-6 h-6 text-white" />
      </header>

      {/* Profile Picture */}
      <div className="mt-6 relative">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <User className="w-12 h-12 text-gray-400" />
        </div>
        <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1">
          <Edit2 className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Name and Email */}
      <div className="mt-2 text-center">
        <h3 className="bg-white rounded-full px-4 py-1 text-blue-600 font-bold inline-block">Fulano da Silva</h3>
        <p className="mt-1 text-white">contatoFulano@email.com.br</p>
      </div>

      {/* Divider */}
      <hr className="w-[85%] border-t border-white mt-4" />

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col w-full px-4 space-y-4">
        {['Trocar Foto de Perfil', 'Alterar Notificações', 'Favoritar Ônibus/Pontos', 'Ver Horário de Linhas'].map((label, idx) => (
          <button
            key={idx}
            className="bg-white text-[#0C9B8A] rounded-2xl py-3 w-full text-center font-semibold shadow-md"
          >
            {label}
          </button>
        ))}
        <button className="bg-blue-600 text-white rounded-2xl py-3 w-full text-center font-semibold shadow-md">
          Voltar ao Mapa
        </button>
      </div>

      {/* Help Section */}
      <div className="absolute bottom-4 flex flex-col items-center">
        <p className="text-white mb-1">Precisa de Ajuda?</p>
        <HelpCircle className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
