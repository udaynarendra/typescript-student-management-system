import {Schema,model,Document} from 'mongoose';
interface IStudent extends Document{
    name:string;
    email:string;
    phone:string;
    year:number,
    branch:string;
    section:string;
    rollNo:string;
    admissionYear:number;
    createdAt:Date;
    updatedAt:Date;
}
const studentSchema = new Schema<IStudent>({
    name:{
        type:String,
        trim:true,
        required:[true,"Student name is required"],
        minLength:[2,"Name must contain at least 2 characters"],
        maxLength:[100,"Name cannot exceed 100 characters"]
    },
    email:{
        type:String,
          trim:true,
        lowercase:true,
        unique:true,
        required:[true,"Email is required"],
        match:[ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format"],
      
    },
    phone:{
        type:String,
        trim:true,
        required:[true,"Phone Number is required"],
        match:[/^\+?[0-9]{10,15}$/,"Invalid phone number"],
    },
    branch:{
        type:String,
        trim:true,
        required:[true,"Branch is required"]
    },
    year:{
        type:Number,
        required:[true,"Academic year is required"],
        min:[1,"Year must be at least 1"],
        max:[4,"year cannot excced 4"],
        validate:{
            validator:Number.isInteger,
            message:"Year must be an Integer"
        }
    },
    section:{
        type:String,
        trim:true,
        uppercase:true,
        required:[true,"Section is required"]
    },
    rollNo:{
        type:String,
        trim:true,
        uppercase:true,
        required:[true,"Roll Number is required"],
        unique:true,
    },
    admissionYear:{
        type:Number,
        required:[true,"Admission Year is required"],
        min:[2000,"Admission Year must be 2000 or later"],
        max:[2100,"Invalid admission year"],
        validate:{
            validator:Number.isInteger,
            message:"Admission year must be an integer"
        }
    }

},{timestamps:true})

export const Student=model<IStudent>('Student',studentSchema);