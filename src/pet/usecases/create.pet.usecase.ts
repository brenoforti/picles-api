import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput> {
    run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
}