import express,{type Express}from 'express';
import { StudentRoutes } from './students/student.routes.js';
import { StudentController } from './students/student.controller.js';
import { StudentService } from './students/student.service.js';
import { StudentRepositry } from './students/student.repositry.js';
const app:Express= express()
app.use(express.json())
const studentRepository=new StudentRepositry();
const studentService=new StudentService(studentRepository);
const studentController=new StudentController(studentService);
const studentRoutes=new StudentRoutes(studentController);
app.use('/api/v1',studentRoutes.route);
export default app;