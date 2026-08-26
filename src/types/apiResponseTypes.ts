export interface apiResponseBase{
    success:boolean;
    message:string;
}

export interface apiResponse<T> extends apiResponseBase{
    data:T;
}