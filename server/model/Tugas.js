const mongoose = require('mongoose');

const TugasSchema = new mongoose.Schema({
      user_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
      },
      kelas_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Kelas',
            required: true
      },
      name_tugas: {
            type: String,
            required: true
      },
      foto_tugas: {
            type: String,
            required: true
      },
      deskripsi_tugas: {
            type: String,
            required: true
      }
}, {
      timestamps: true
});
const TugasModel = mongoose.model("tugas", TugasSchema);
module.exports = TugasModel