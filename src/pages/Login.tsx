import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs">
        <h1 className="text-3xl font-semibold text-center mb-6">Вход</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Введите ваш email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Пароль</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Введите ваш пароль"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
