export interface student{
    id:string;
    name:string;
    email:string;
    phone:string;
    branch:string;
    year:number;
    section:string;
    rollNumber:string;
    dateOfBirth:string;
    admissionYear:number;
}
export type createStudentInput=Omit<student,"id">;
export type UpdateStudentInput=Partial<createStudentInput>;