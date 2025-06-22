import React from 'react';
import * as lucideReact from 'lucide-react';

export function RegisterScreen() {
  return (
    <div className="w-[390px] h-[852px] bg-gradient-to-b from-[#0C9B8A] to-white flex flex-col items-center py-10">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-20 h-20">
          <lucideReact.MapPin className="w-full h-full text-white" />
          <lucideReact.Bus className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0C9B8A] w-10 h-10" />
        </div>
        <h1 className="mt-2 text-2xl font-bold text-white">BusTrack</h1>
      </div>

      <div className="w-[80%] flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Insira seu Nome"
          className="h-12 rounded-full border border-[#004E55] px-4 placeholder:text-gray-500"
        />
        <input
          type="email"
          placeholder="Insira seu Email"
          className="h-12 rounded-full border border-[#004E55] px-4 placeholder:text-gray-500"
        />
        <input
          type="password"
          placeholder="Insira sua Senha"
          className="h-12 rounded-full border border-[#004E55] px-4 placeholder:text-gray-500"
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          className="h-12 rounded-full border border-[#004E55] px-4 placeholder:text-gray-500"
        />

        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Aceitar Termos
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Receber Notificações
        </label>

        <button className="w-full h-12 bg-[#2D50EC] text-white rounded-full mt-4">
          Concluir Cadastro
        </button>
        <a href="#" className="text-center text-[#0C9B8A] mt-2">
          Entrar com Conta Existente
        </a>
      </div>
    </div>
  );
}

export default RegisterScreen;
