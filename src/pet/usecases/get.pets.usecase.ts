import { IUseCase } from "src/domain/iusecase.interface";
import GetPetsUseCaseInput from "./dtos/get.pets.usecase.input";
import GetPetsUseCaseOutput from "./dtos/get.pets.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "src/pet/pet.tokens";
import IPetRepository from "src/pet/interfaces/pet.repository.interface";
import AppTokens from "src/app.tokens";
import IFileService from "src/interface/file.service.interface";
import PetResponse from "src/pet/dtos/pet.response";

@Injectable()
export default class GetPetsUseCase implements IUseCase<GetPetsUseCaseInput, GetPetsUseCaseOutput>{

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ){}

    async run(input: GetPetsUseCaseInput): Promise<GetPetsUseCaseOutput> {
        const queryResponse = await this.petRepository.findByFilter(input);

        const petRepositoryList: PetResponse[] = [];

        for(const currentPet of queryResponse.items) {
            if (currentPet.photo) {
                currentPet.photo = await this.fileService.readFileInBase64(currentPet.photo);
            }
            
            petRepositoryList.push(PetResponse.fromPet(currentPet));
        }

        const totalPages = Math.ceil(queryResponse.total / input.itemsPerPage);

        return new GetPetsUseCaseOutput({
            currentPage: input.page,
            totalPages,
            items: petRepositoryList,
        });
    }
}