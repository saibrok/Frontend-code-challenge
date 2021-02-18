import axios from 'axios';
// const baseUrl = 'https://europe-west1-st-testcase.cloudfunctions.net/api';
const baseUrl = 'http://localhost:3000/';

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
        // return apiClient.post('/auth'); // for cloudfunctions.net
        return apiClient.get('/auth'); // for json server
    },

    getReminders(userId) {
        return apiClient.get(`/reminders?userId=${userId}`);
    },

    createReminder({ userId, reminder }) {
        return apiClient.post(`/reminders?userId=${userId}`, reminder);
    },

    editReminder({ userId, reminderId, newReminder }) {
        return apiClient.put(
            `/reminders/${reminderId}?userId=${userId}`,
            newReminder,
        );
    },

    deleteReminder({ userId, reminderId }) {
        return apiClient.delete(`/reminders/${reminderId}?userId=${userId}`);
    },
};
