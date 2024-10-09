import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Иконки для контактной информации

const Help: React.FC = () => {
  const navigate = useNavigate();

  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-900 py-8 px-4">
      <div className="w-full flex-grow">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Помощь</h1>
        <p className="text-lg text-gray-300 mb-4 text-center">
          Здесь вы можете найти ответы на часто задаваемые вопросы и другую полезную информацию.
        </p>

        {/* Раздел с вопросами и ответами */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Часто задаваемые вопросы</h2>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-300">1. Как я могу восстановить свой пароль?</h3>
            <p className="text-gray-400">Чтобы восстановить свой пароль, нажмите на кнопку «Забыли пароль?» на экране входа в систему.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-300">2. Как я могу изменить тарифный план?</h3>
            <p className="text-gray-400">Вы можете изменить тарифный план, зайдя в свой личный кабинет и выбрав новый тариф.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-300">3. Как получить поддержку?</h3>
            <p className="text-gray-400">Вы можете обратиться в службу поддержки через раздел «Контакты» в меню.</p>
          </div>

          {/* Дополнительные вопросы */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-300">4. Как я могу отменить подписку?</h3>
            <p className="text-gray-400">Вы можете отменить подписку в разделе «Подписка» вашего личного кабинета.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-300">5. Есть ли пробный период?</h3>
            <p className="text-gray-400">Да, мы предлагаем пробный период на 7 дней для новых пользователей.</p>
          </div>
        </div>
      </div>

      {/* Раздел с контактной информацией */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full">
        <h2 className="text-2xl font-semibold text-white mb-4">Контактная информация</h2>
        <p className="text-gray-300 mb-2">Если у вас есть дополнительные вопросы, вы можете связаться с нами:</p>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-400">pipi@pupu.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-blue-500 mr-2" />
          <span className="text-gray-400">+7 (988) 826-8359</span>
        </div>
      </div>

      {/* Кнопка возврата */}
      <div className="mt-4 w-full">
        <button
          onClick={goBack}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Help;
