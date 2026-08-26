import type { apiResponse, apiResponseBase } from "../types/apiResponseTypes.js"
export const createApiResponse=<T>(
    message:string,
    data:T
):apiResponse<T>=>{
    return {
        success:true,
        message,
        data
    };

};

export const createMessageResponse=(message:string):apiResponseBase=>{
    return {
        success:true,
        message
    }
}