import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';

@Module({
  controllers: [ShelterController]
})
export class ShelterModule {}
