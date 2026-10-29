import { statusCode } from "../constants/statusCodes.js";
import type { Request,Response } from "express";
import type { StudentService } from "./student.service.js";
import { ApiResponse } from "../utils/apiResponse.js";
export class StudentController{
    constructor(private readonly studentService:StudentService){}
    async create(req:Request,res:Response<{message:string}>):Promise<void>{
        await this.studentService.createStudent(req.body);
        const response=new ApiResponse(statusCode.CREATED,'Student Created Successfully')
       res.status(response.statusCode).json(response)
    }
}