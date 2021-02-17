import axios from 'axios';
const baseUrl = 'https://europe-west1-st-testcase.cloudfunctions.net/api';

const apiClient = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    auth() {
        return apiClient.post('/auth');
    },

    getAllReminders(userId) {
        return apiClient.get(`/reminders?userId=${userId}`);
    },

    createReminder({ userId, reminder }) {
        return apiClient.post(`/reminders?userId=${userId}`, reminder);
    },

    deleteReminder({ userId, reminderId }) {
        return apiClient.delete(`/reminders/${reminderId}?userId=${userId}`);
    },
};

// Изменение напоминания по его id
// PUT /api/reminders/{reminderId}?userId={userId}
// { note: 'example', date: '2019-01-01T10:15:00.000Z' }

// Удаление напоминания по его id
// DELETE /api/reminders/{reminderId}?userId={userId}
// };
