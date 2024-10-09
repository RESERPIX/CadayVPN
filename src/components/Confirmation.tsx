import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  tariffName: string;
  tariffPrice: number;
  vpnKey: string;
}

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tariffName, tariffPrice, vpnKey } = location.state as LocationState;

  // Функция для возврата на главную страницу личного кабинета
  const handleGoBack = () => {
    navigate('/dashboard');
  };

  // Функция для копирования VPN-ключа в буфер обмена
  const copyToClipboard = () => {
    navigator.clipboard.writeText(vpnKey)
      .then(() => {
        alert('VPN-ключ скопирован в буфер обмена!');
      })
      .catch(err => {
        console.error('Ошибка при копировании в буфер обмена:', err);
        alert('Не удалось скопировать ключ. Попробуйте еще раз.');
      });
  };

  // Проверяем, что все необходимые данные получены
  if (!tariffName || !tariffPrice || !vpnKey) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <h1 className="text-2xl text-red-500">Ошибка: отсутствуют необходимые данные!</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-6">
      <h1 className="text-5xl font-bold text-center text-white">Спасибо за оплату!</h1>
      <p className="text-xl mt-4 text-center text-gray-300">
        Вы выбрали тариф: <span className="font-semibold text-blue-400">{tariffName}</span>
      </p>
      <p className="text-lg text-center text-gray-400">
        Цена: <span className="font-semibold text-blue-400">{tariffPrice} ₽ в месяц</span>
      </p>
      <p className="text-lg mt-4 text-center text-gray-400">
        Ваш VPN-ключ: <span className="font-semibold text-blue-400">{vpnKey}</span>
      </p>
      <button
        onClick={copyToClipboard}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors shadow-md"
      >
        Копировать ключ
      </button>
      <button
        onClick={handleGoBack}
        className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors shadow-lg"
      >
        Вернуться в личный кабинет
      </button>
    </div>
  );
};

export default Confirmation;
