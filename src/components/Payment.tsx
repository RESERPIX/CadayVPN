import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const location = useLocation();
  const { tariffName, tariffPrice } = location.state || { tariffName: '', tariffPrice: 0 };
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    const isCardValid = validateCard(cardNumber);
    if (!isCardValid) {
      setError('Некорректный номер карты.');
      return;
    }

    const randomUserId = Math.floor(Math.random() * 5) + 1;

    try {
      const response = await fetch(`http://localhost:5000/purchase-key`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: randomUserId }),
      });
      const data = await response.json();

      if (response.ok) {
        navigate('/confirmation', { state: { tariffName, tariffPrice, vpnKey: data.vpnKey } });
      } else {
        setError(data.message || 'Не удалось получить VPN-ключ.');
      }
    } catch (err) {
      console.error('Ошибка при получении ключа:', err);
      setError('Ошибка сервера. Пожалуйста, попробуйте позже.');
    }
  };

  const validateCard = (number: string): boolean => {
    return /^\d{16}$/.test(number);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4 text-white">
      <h1 className="text-5xl font-bold mb-4">Оплата тарифа: {tariffName}</h1>
      <p className="text-xl mb-4">Цена: {tariffPrice} ₽ в месяц</p>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Способы оплаты:</h2>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2 accent-blue-500"
          />
          Кредитная карта
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2 accent-blue-500"
          />
          PayPal
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="yandexMoney"
            checked={paymentMethod === 'yandexMoney'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2 accent-blue-500"
          />
          Яндекс.Деньги
        </label>
      </div>

      {paymentMethod === 'creditCard' && (
        <>
          <input
            type="text"
            placeholder="Номер карты"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="p-3 border border-gray-700 rounded mb-4 w-80 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Срок действия (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="p-3 border border-gray-700 rounded mb-4 w-80 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="p-3 border border-gray-700 rounded mb-4 w-80 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}

      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        Оплатить
      </button>
    </div>
  );
};

export default Payment;
