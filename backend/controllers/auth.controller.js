import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
export const register = async (req, res) => {
const { name, email, password } = req.body;
const userExists = await User.findOne({ email });
if (userExists) return res.status(400).json({ message: 'User already exists' });


const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashedPassword });


res.status(201).json({ message: 'User registered successfully' });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token, {
    maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true,  secure: isProduction,  sameSite: isProduction ? "none" : "lax",
  });

  res.json({
    message: 'Login successful',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};


export const getProfile = async (req, res) => {
const user = await User.findById(req.user.id).select('-password');
res.json(user);
};


export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};