import { StudentRepositry } from "./student.repositry.js"
import { type createInputDto } from "./student.types.js"
import { ApiError } from "../utils/ApiError.js";
import { statusCode } from "../constants/statusCodes.js";
export class StudentService{
    constructor(private readonly studentRepository:StudentRepositry ){}
    async createStudent(validateData:createInputDto){
        const isStudentExisting=await this.studentRepository.findStudent(validateData.email,validateData.rollNo);
        if(isStudentExisting){
            throw new ApiError(statusCode.CONFLICT,"Already student exists");
        }
        const student = await this.studentRepository.create(validateData)
    }
}