export default class GetShelterDetailsUseCaseOutput {
    shelterName: string;
    shelterEmail: string;
    shelterWhatsApp: string;
    shelterPhone: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)
    }
}