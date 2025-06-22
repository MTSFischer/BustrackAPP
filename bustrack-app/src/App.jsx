import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeviceFrame from './components/DeviceFrame';
import IntroScreen from './pages/IntroScreen';
import LandingScreen from './pages/LandingScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import MapScreen from './pages/MapScreen';
import ProfileScreen from './pages/ProfileScreen';
import NotificationScreen from './pages/NotificationScreen';


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <DeviceFrame>
        <BrowserRouter>
  <Routes>
    <Route path="/intro"    element={<IntroScreen />} />
    <Route path="/"         element={<LandingScreen />} />
    <Route path="/cadastro" element={<RegisterScreen />} />
    <Route path="/login"    element={<LoginScreen />} />
    <Route path="/map" element={<MapScreen />} />
    <Route path="/perfil" element={<ProfileScreen />} />
    <Route path="/notifications" element={<NotificationScreen />} />
  </Routes>
</BrowserRouter>
      </DeviceFrame>
    </div>
  );
}