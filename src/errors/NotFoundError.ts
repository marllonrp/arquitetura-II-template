import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor (
        message:string = "Requisição não encontrado."
    ){
        super(404, message)
    }
}