import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
    constructor (
        message:string = "Requisiçãoinválida"
    ){
        super(400, message)
    }
}

