import express from 'express'
import type {Router} from 'express';
import { StudentController } from './student.controller.js';
export class StudentRoutes{
     public readonly route:Router=express.Router();
    constructor(private readonly studentController:StudentController){
        this.initializedRoutes();
    }
    private initializedRoutes():void{
        this.route.post('/students',this.studentController.create.bind(this.studentController))
    }   
}
