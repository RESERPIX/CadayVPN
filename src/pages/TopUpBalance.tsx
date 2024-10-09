import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopUpBalance: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
    if (e.target.value !== 'card') {
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const newBalance = userData.balance + Number(amount);
      userData.balance = newBalance;

      localStorage.setItem('userData', JSON.stringify(userData));
      alert(`Ваш баланс успешно пополнен на ${amount} ₽ через ${paymentMethod}. Новый баланс: ${newBalance} ₽`);
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Пополнение баланса</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            placeholder="Введите сумму"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-700 text-white"
            required
          />

          <label className="block mb-2 text-gray-400" htmlFor="payment-method">Выберите способ пополнения:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-700 text-white"
          >
            <option value="card">Банковская карта</option>
            <option value="paypal">PayPal</option>
            <option value="wallet">Электронный кошелек</option>
          </select>

          {paymentMethod === 'card' && (
            <div>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Номер карты"
                className="w-full p-2 border border-gray-600 rounded mb-2 bg-gray-700 text-white"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  className="w-1/2 p-2 border border-gray-600 rounded mb-2 bg-gray-700 text-white"
                  required
                />
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="CVV"
                  className="w-1/2 p-2 border border-gray-600 rounded mb-2 bg-gray-700 text-white"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Пополнить
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopUpBalance;
