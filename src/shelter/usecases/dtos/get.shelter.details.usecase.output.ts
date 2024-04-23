export default class GetShelterDetailsUseCaseOutput {
    name: string;
    email: string;
    whatsApp: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)
    }
}