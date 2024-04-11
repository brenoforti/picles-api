import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Bigo',
            shelterEmail: 'abb@gmail.com',
            shelterWhatsApp: '19911111111',
            shelterPhone: '19922222222',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}