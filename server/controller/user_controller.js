const UsersModel = require('../model/Users')
const bcrypt = require('bcrypt')

async function getUsers(req, res) {
      try {
            const user = await UsersModel.find({});
            res.json(user);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}

async function createUsers(req, res) {
      try {
            const { name, email, password } = req.body;

            // Hash the password before saving it to the database
            const hashedPassword = await bcrypt.hash(password, 10);

            const userData = {
                  name,
                  email,
                  password: hashedPassword,
            };

            const user = await UsersModel.create(userData);
            res.status(201).json(user);
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}
async function deleteUser(req, res) {
      try {
            const userId = req.params.id;
            const existingUser = await UsersModel.findByIdAndDelete(userId);
            if (!existingUser) {
                  return res.status(404).json({
                        message: "Users Not Found"
                  })
            }
            await UsersModel.findByIdAndDelete(userId);
            res.json({
                  message: "Success deleted users"
            })
      } catch (err) {
            res.status(500).json({ error: err.message })
      }
}
async function showUser(req, res) {
      try {
            const userId = req.params.id;
            const existingUser = await UsersModel.findById(userId)
            if (!existingUser) {
                  return res.status(404).json({
                        message: "Users Not Found"
                  })
            }
            await UsersModel.findById(userId);
            res.json(existingUser);
      } catch (err) {
            res.status(500).json({ error: err.message })
      }
}
async function updateUser(req, res) {
      try {
            const userId = req.params.id;
            const existingUser = await findByIdAndUpdate(userId, req.body, {
                  new: true,
                  runValidators: true,
            });
            if (!existingUser) {
                  return res.status(404).json({
                        error: "Kelas not found"
                  })
            }
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}


module.exports = {
      getUsers,
      createUsers,
      deleteUser,
      showUser,
      updateUser
}
