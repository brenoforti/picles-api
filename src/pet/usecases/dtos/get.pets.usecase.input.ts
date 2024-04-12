export default class GetPetsByIdUseCaseInput {
    type?: string;
    size?: string;
    gender?: string;
    page: number;
    itemsPerPage: number;

    constructor(data: Partial<GetPetsByIdUseCaseInput>) {
        Object.assign(this, data)
    }
}