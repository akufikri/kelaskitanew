const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const kelasRoutes = require('./routes/kelasRouter');
const userRoutes = require('./routes/userRouter');
const joinKelasRoutes = require('./routes/joinKelasRouter')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/db_kelaskita");

app.use('/', kelasRoutes);

app.use('/kelas', kelasRoutes);
app.use('/user', userRoutes);
app.use('/join_kelas', joinKelasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
