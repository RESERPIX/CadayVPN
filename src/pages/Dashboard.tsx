import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Функция для перехода в личный кабинет
  const goToProfile = () => {
    navigate('/profile'); // Предполагаем, что страница профиля будет доступна по этому пути
  };

  // Функция для перехода на страницу помощи
  const goToHelp = () => {
    navigate('/help'); // Предполагаем, что страница помощи будет доступна по этому пути
  };

  // Функция для выбора тарифа и перехода к оплате
  const handleTariffSelection = (tariffName: string, tariffPrice: number) => {
    navigate('/payment', { state: { tariffName, tariffPrice } });
  };

  // Цены на тарифы
  const monthlyPrice1Month = 390;  // Цена за 1 месяц
  const monthlyPrice6Months = 195; // Цена за 6 месяцев
  const monthlyPrice1Year = 150;   // Цена за 1 год

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-900 py-8 px-4">
      <div className="w-full flex-grow">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Выберите тариф</h1>
        <p className="text-lg text-gray-300 mb-4 text-center">Для продолжения выберите один из тарифов ниже:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Тариф на 1 месяц */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-blue-700">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-white">1 месяц</h2>
            <p className="text-lg sm:text-xl text-center text-gray-400 mb-2">
              Цена: <span className="font-bold text-blue-500">{monthlyPrice1Month} ₽ / в месяц</span>
            </p>
            <p className="text-xl sm:text-2xl font-bold text-center text-gray-100 bg-gray-700 rounded p-2 mt-4">
              Итого: {monthlyPrice1Month} ₽
            </p>
            <button
              onClick={() => handleTariffSelection('1 месяц', monthlyPrice1Month)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Выбрать
            </button>
          </div>

          {/* Тариф на 6 месяцев */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-blue-700">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-white">6 месяцев</h2>
            <p className="text-lg sm:text-xl text-center text-gray-400 mb-1">
              Цена: <span className="font-bold text-blue-500">{monthlyPrice6Months} ₽ / в месяц</span>
            </p>
            <p className="text-xl sm:text-2xl font-bold text-center text-gray-100 bg-gray-700 rounded p-2 mt-4">
              Итого: {monthlyPrice6Months * 6} ₽
            </p>
            <button
              onClick={() => handleTariffSelection('6 месяцев', monthlyPrice6Months * 6)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Выбрать
            </button>
          </div>

          {/* Тариф на 1 год */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-blue-700">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-white">1 год</h2>
            <p className="text-lg sm:text-xl text-center text-gray-400 mb-1">
              Цена: <span className="font-bold text-blue-500">{monthlyPrice1Year} ₽ / в месяц</span>
            </p>
            <p className="text-xl sm:text-2xl font-bold text-center text-gray-100 bg-gray-700 rounded p-2 mt-4">
              Итого: {monthlyPrice1Year * 12} ₽
            </p>
            <button
              onClick={() => handleTariffSelection('1 год', monthlyPrice1Year * 12)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Выбрать
            </button>
          </div>
        </div>
      </div>

      {/* Нижнее меню навигации */}
      <div className="w-full fixed bottom-0 bg-gray-800 shadow-md">
        <div className="flex justify-around items-center px-4 py-3 border-t border-gray-700">
          {/* Личный кабинет */}
          <button
            onClick={goToProfile}
            className="flex flex-col items-center text-gray-300 hover:text-blue-500 transition-colors"
          >
            <svg
              className="w-7 h-7 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14c3.866 0 7 3.134 7 7H5c0-3.866 3.134-7 7-7zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"
              />
            </svg>
            <span className="text-md font-medium">Личный кабинет</span>
          </button>

          {/* Помощь */}
          <button
            onClick={goToHelp}
            className="flex flex-col items-center text-gray-300 hover:text-blue-500 transition-colors"
          >
            <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 0M15 11h2a2 2 0 100-4h-2m-3 4v6m0 4h.01"></path>
            </svg>
            <span className="text-md font-medium">Помощь</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
