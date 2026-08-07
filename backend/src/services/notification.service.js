const Notification = require('../models/Notification.model');

// Creates an in-app notification. Wire up email/SMS providers here later.
async function sendNotification(userId, title, message, type = 'general') {
  return Notification.create({ user: userId, title, message, type });
}

module.exports = { sendNotification };
