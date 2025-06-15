// controllers/adminController.js
import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find({}, '-password'); // Exclude passwords
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
