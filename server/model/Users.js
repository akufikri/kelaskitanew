const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            unique: true, // Ensures the email field is unique
      },
      password: {
            type: String,
            required: true,
      },
}, {
      timestamps: true,
});

const UsersModel = mongoose.model("user", UsersSchema);
module.exports = UsersModel;
