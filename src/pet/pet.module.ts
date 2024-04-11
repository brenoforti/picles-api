import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import PetTokens from './pet.tokens';
import CreatePetUseCase from './usecases/create.pet.usecase';
import PetRepository from './pet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schemas/pet.schema';

@Module({
  controllers: [PetController],
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema}])],
  providers: [
    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase
    },
    {
      provide: PetTokens.petRepository,
      useClass: PetRepository
    }
  ]
})
export class PetModule {}
