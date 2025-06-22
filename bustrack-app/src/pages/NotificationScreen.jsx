import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';

// Notification Settings Screen
export default function NotificationScreen() {
  return (
    <div className="w-[390px] h-[852px] flex flex-col bg-[#0C9B8A] items-center relative">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-4 pt-4">
        <ArrowLeft className="w-6 h-6 text-white" />
        <h2 className="text-xl font-bold text-white">BusTrack</h2>
        <HelpCircle className="w-6 h-6 text-white" />
      </header>

      {/* Title */}
      <h3 className="mt-6 text-white text-lg font-semibold">Ative Ou Desative Suas Notificações</h3>

      {/* Toggles */}
      <div className="mt-4 flex flex-col space-y-4 w-full px-4">
        {/* Master Toggle */}
        <div className="flex items-center justify-between bg-[#297D7E] rounded-2xl p-4 shadow-md">
          <span className="text-white font-medium">Ativar Tudo Ou Desativar</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white rounded-full peer peer-checked:bg-green-500"></div>
            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
          </label>
        </div>

        {/* Individual Toggles */}
        {[
          { label: 'Receber Notificações De Ônibus Por Perto' },
          { label: 'Receber Novidades Sobre O Que Esta Acontecendo De Novo!' },
          { label: 'Receber Atualização Quando Houver Novos Horários Das Linhas De Tráfego' },
          { label: 'Receber Notificações De Saldo' },
          { label: 'Receber Notificações Dos Ônibus Favoritos' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
            <span className="text-[#0C9B8A] font-medium text-sm">{item.label}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0C9B8A] rounded-full peer peer-checked:bg-green-500"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="absolute bottom-6 flex w-full px-4 justify-between">
        <button className="flex-1 mr-2 border border-white text-white rounded-2xl py-3 font-medium">Cancelar</button>
        <button className="flex-1 ml-2 bg-white text-[#0C9B8A] rounded-2xl py-3 font-medium">Salvar</button>
      </div>
    </div>
  );
}
