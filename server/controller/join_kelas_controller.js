const JoinKelasModel = require('../model/JoinKelas');
const KelasModel = require('../model/Kelas');

async function getJoinKelas(req, res) {
      try {
            const joinKelas = await JoinKelasModel.find({});
            res.json(joinKelas);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}

async function joinKelas(req, res) {
      try {
            const { kode_kelas } = req.body;  // Ubah menjadi kode_kelas
            const kelas = await KelasModel.findOne({ kode_kelas: kode_kelas });

            if (!kelas) {
                  return res.status(404).json({ error: 'Kelas not found' });
            }

            const joinKelasEntry = new JoinKelasModel({
                  kelas: kelas._id,
                  role: 'siswa',
            });

            await joinKelasEntry.save();
            res.json({ message: 'Joined class successfully', role: 'siswa' });
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}

module.exports = {
      getJoinKelas,
      joinKelas
};
