import {Student, type IStudent} from './student.model.js';


export class StudentRepositry{
async create(data:Partial<IStudent>):Promise<IStudent>{
    return await Student.create(data);
}
async findStudent(email:string,rollNo:string):Promise<IStudent|null>{
    return await Student.findOne({email,rollNo});
}
}