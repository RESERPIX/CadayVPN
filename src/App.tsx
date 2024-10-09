import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreens from './pages/WelcomeScreens';
import Dashboard from './pages/Dashboard';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Profile from './pages/Profile';
import Login from './pages/Login';
import TopUpBalance from './pages/TopUpBalance';
import Help from './pages/Help'; // Импортируйте Help

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreens />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/top-up" element={<TopUpBalance />} />
      <Route path="/help" element={<Help />} /> {/* Новый маршрут для страницы помощи */}
    </Routes>
  );
};

export default App; // Убедитесь, что экспортируется по умолчанию
