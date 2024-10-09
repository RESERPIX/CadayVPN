import React, { useState } from 'react';

const screens = [
  {
    title: 'Добро пожаловать в наш VPN-сервис!',
    description: 'С помощью нашего сервиса вы можете безопасно и анонимно серфить в интернете.',
  },
  {
    title: 'Широкий выбор тарифов',
    description: 'Мы предлагаем различные тарифы, чтобы удовлетворить ваши потребности.',
  },
  {
    title: 'Получите свой ключ',
    description: 'После оплаты вы получите свой уникальный ключ для подключения к VPN.',
  },
];

const WelcomeScreens: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      // После последнего экрана переходим в личный кабинет
      window.location.href = '/dashboard'; // или используйте navigate из react-router
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">{screens[currentScreen].title}</h1>
        <p className="text-base text-gray-300 text-center mb-6">{screens[currentScreen].description}</p>
        <button
          onClick={nextScreen}
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded transition duration-300 hover:bg-blue-700"
        >
          {currentScreen < screens.length - 1 ? 'Далее' : 'Вперёд'}
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreens;
