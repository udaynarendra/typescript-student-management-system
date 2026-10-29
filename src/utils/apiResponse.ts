
// src/utils/ApiResponse.ts
export class ApiResponse<T> {
    public statusCode: number;
    public data?: T;
    public message: string;
    public success: boolean;

    constructor(statusCode: number, data: T, message = 'Success') {
        this.statusCode = statusCode;
        this.message = message;
        // Automatically sets success to true for 2xx and 3xx status codes
        this.success = statusCode < 400;
         this.data= data;
    }
}