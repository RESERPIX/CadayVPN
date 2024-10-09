import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null); // Замените 'any' на фактический тип, если у вас он есть
  const [isEditing, setIsEditing] = useState(false); // Состояние для переключения режима редактирования
  const [formData, setFormData] = useState({ name: '', email: '' }); // Данные формы для редактирования
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData);
      setUser(parsedUser);
      setFormData({ name: parsedUser.name, email: parsedUser.email }); // Установите начальные данные формы
    } else {
      // Перенаправляем на страницу входа, если данные пользователя отсутствуют
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return <div>Загрузка...</div>; // Состояние загрузки
  }

  // Функция для редактирования данных пользователя
  const handleEdit = () => {
    setIsEditing(!isEditing); // Переключение режима редактирования
  };

  // Обработчик изменения данных формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Функция для сохранения изменений
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData }; // Обновляем данные пользователя
    setUser(updatedUser);
    localStorage.setItem('userData', JSON.stringify(updatedUser)); // Сохраняем в localStorage
    setIsEditing(false); // Выход из режима редактирования
  };

  // Функция для пополнения баланса
  const handleTopUp = () => {
    alert('Пополнение баланса пока не реализовано.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-4">Личный кабинет</h1>

        {/* Контейнеры для Баланса и Информации о пользователе на одном уровне */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          {/* Контейнер для Баланса */}
          <div className="bg-gray-700 flex-1 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-2">Баланс</h2>
            <p className="text-xl text-green-400"><strong>{user.balance} ₽</strong></p>

            {/* Кнопка пополнения баланса */}
            <button
              onClick={() => navigate('/top-up')} // Перенаправляем на страницу пополнения
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
            >
              Пополнить баланс
            </button>
          </div>

          {/* Контейнер для Информации о пользователе */}
          <div className="bg-gray-700 flex-1 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-4">Информация о пользователе</h2>
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  className="w-full p-2 mb-2 border border-gray-500 rounded bg-gray-600 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 mb-2 border border-gray-500 rounded bg-gray-600 text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  Сохранить изменения
                </button>
              </form>
            ) : (
              <>
                <p className="text-lg text-white"><strong>Имя:</strong> {user.name}</p>
                <p className="text-lg text-white mt-2"><strong>Email:</strong> {user.email}</p>
                <button
                  onClick={handleEdit}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  Изменить данные
                </button>
              </>
            )}
          </div>
        </div>

        {/* Контейнер для Статуса подписки */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-white mb-4">Статус подписки</h2>
          <p className="text-lg text-white"><strong>Подписка:</strong> {user.subscriptionPlan}</p>
          <p className="text-lg text-white mt-2"><strong>Статус:</strong> {user.subscriptionStatus}</p>
          <p className="text-lg text-white mt-2"><strong>Окончание подписки:</strong> {user.subscriptionEndDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
