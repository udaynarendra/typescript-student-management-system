import mongoose, { disconnect } from "mongoose";

export class Database{
    constructor(private readonly connectionString:string){}
    public async connect():Promise<void>{
        try{
            await mongoose.connect(this.connectionString);
            console.log('Successfully connected to MongoDB');
            mongoose.connection.on('error',(err)=>{
                console.error('MongoDB connection error:',err);
            })
            mongoose.connection.on('disconnected',()=>{
                console.warn('MongoDB disconnecte. Attempting to reconnect...');
            })

        }catch(error){
            console.error('Failed to connect to MongoDB initially:',error)
            process.exit(1)
        }
    }
        
    public async disconnect():Promise<void>{
        await mongoose.disconnect();
        console.log('MongoDB disconnected gracefull');
    }

}
