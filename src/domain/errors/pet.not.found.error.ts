import { CustomError } from "./custom.errors";

export default class PetNotFoundError extends CustomError {
    constructor() {
        super('Pet Not Found', '0001');
    }
}