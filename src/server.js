const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors()); // Разрешаем CORS
app.use(express.json()); // Позволяет Express парсить JSON

// Настройка подключения к базе данных
const pool = new Pool({
    user: 'vpnkey',
    host: 'localhost',
    database: 'vpn_db',
    password: '4539',
    port: 5432,
});

// Функция генерации VPN-ключа
function generateKeyValue() {
    return Math.random().toString(36).substr(2, 10); // Пример генерации значения для key_value
}


// Получение доступного VPN-ключа для пользователя
async function getRandomVpnKey() {
    const result = await pool.query('SELECT vpn_key FROM vpn_keys ORDER BY RANDOM() LIMIT 1'); // Выбираем случайный ключ

    if (result.rows.length > 0) {
        return result.rows[0].vpn_key; // Возвращаем случайный VPN-ключ
    }

    return null; // Если ключ не найден
}

// Создание или получение VPN-ключа
app.post('/purchase-key', async (req, res) => {
    const { userId } = req.body; // userId передается в теле запроса

    // Проверка на валидность userId
    if (!userId || isNaN(userId)) {
        return res.status(400).json({ message: 'Некорректный userId' });
    }

    try {
        const vpnKey = await getRandomVpnKey(); // Получаем случайный ключ

        if (vpnKey) {
            res.json({ vpnKey });
        } else {
            res.status(404).json({ message: 'VPN-ключ не найден' });
        }
    } catch (error) {
        console.error('Ошибка при обработке запроса:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});




// Получение VPN-ключа
app.get('/vpn-key/:userId', async (req, res) => {
    const userId = req.params.userId;

    // Проверка на валидность userId
    if (!userId || isNaN(userId)) {
        return res.status(400).json({ message: 'Некорректный userId' });
    }

    try {
        const result = await pool.query('SELECT vpn_key FROM vpn_keys WHERE user_id = $1 ORDER BY id DESC LIMIT 1', [userId]);
        if (result.rows.length > 0) {
            res.json({ vpnKey: result.rows[0].vpn_key });
        } else {
            res.status(404).json({ message: 'VPN-ключ не найден' });
        }
    } catch (error) {
        console.error('Ошибка при получении ключа:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// Запуск сервера
const PORT = 5000; // Или другой порт, если нужно
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
