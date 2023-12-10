const KelasModel = require('../model/Kelas');

function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
}

async function createKelas(req, res) {
      try {
            const kelasData = {
                  name: req.body.name,
                  kode_kelas: generateRandomString(5),
                  deskripsi: req.body.deskripsi,
            };

            const kelas = await KelasModel.create(kelasData);
            res.status(201).json(kelas);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}

async function getKelas(req, res) {
      try {
            const kelas = await KelasModel.find({});
            res.json(kelas);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}

async function deleteKelas(req, res) {
      try {
            const kelasId = req.params.id;

            const existingKelas = await KelasModel.findByIdAndDelete(kelasId);
            if (!existingKelas) {
                  return res.status(404).json({
                        error: "Kelas Not Found"
                  });
            }
            await KelasModel.findByIdAndDelete(kelasId);
            res.json({
                  message: "Success deleted kelas"
            })
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}
async function showKelas(req, res) {
      try {
            const kelasId = req.params.id;

            const existingKelas = await KelasModel.findById(kelasId);
            if (!existingKelas) {
                  return res.status(404).json({
                        error: "Kelas Not Found"
                  });
            }
            await KelasModel.findById(kelasId);
            res.json(existingKelas)
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}
async function updateKelas(req, res) {
      try {
            const kelasId = req.params.id;

            // Check if the document exists before attempting to update
            const existingKelas = await KelasModel.findByIdAndUpdate(kelasId, req.body, {
                  new: true, // This option returns the modified document, not the original one
                  runValidators: true, // This option runs the validators, ensuring the update complies with the schema
            });

            if (!existingKelas) {
                  return res.status(404).json({
                        error: "Kelas Not Found",
                  });
            }

            res.json(existingKelas);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}


module.exports = {
      createKelas,
      getKelas,
      deleteKelas,
      showKelas,
      updateKelas
};
