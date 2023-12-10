const mongoose = require('mongoose');

const JoinKelasSchema = new mongoose.Schema({
      kelas: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Kelas',
            required: true,
      },
      role: {
            type: String,
            required: true,
      },
      joinedAt: {
            type: Date,
            default: Date.now,
      },
});

const JoinKelasModel = mongoose.model('join_kelas', JoinKelasSchema);

module.exports = JoinKelasModel;
