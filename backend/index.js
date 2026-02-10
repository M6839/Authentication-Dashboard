import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.use((err, req, res, next) => {
console.error(err);
res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log('Mongodb connected succefullly')
})
.catch(err => console.error(err));


app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})