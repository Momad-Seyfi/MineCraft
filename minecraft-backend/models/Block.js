// minecraft-backend/models/Block.js
const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
  id: Number,
  type: String,
  position: { x: Number, y: Number, z: Number },
});

module.exports = mongoose.model('Block', BlockSchema);
