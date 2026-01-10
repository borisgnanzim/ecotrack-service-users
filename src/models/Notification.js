const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  roleTarget: { type: String, enum: ['citizen', 'agent', 'manager', 'admin'], required: false },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['info', 'success', 'warning', 'error'], default: 'info' },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
module.exports = Notification;