import app from './app.js';
import { Database } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT || 3000;
const MONGO_URI=process.env.MONGO_URI || 'mongodb://localhost:27017/student_db';
const dataBase=new Database(MONGO_URI);
const startServer=async()=>{
    await dataBase.connect();
    app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
}
startServer();
