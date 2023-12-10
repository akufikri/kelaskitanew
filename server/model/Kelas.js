const mongoose = require('mongoose');

const KelasSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      kode_kelas: {
            type: String,
            required: true,
      },
      deskripsi: {
            type: String,
            required: true,
      },

}, {
      timestamps: true,
});


const KelasModel = mongoose.model("kelas", KelasSchema);

module.exports = KelasModel;
