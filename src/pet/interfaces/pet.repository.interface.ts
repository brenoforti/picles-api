import { Pet } from "../schemas/pet.schema";

export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
}