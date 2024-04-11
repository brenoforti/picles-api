import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('shelter')
export class ShelterController {
    @Get()
    getShelterDetails(): string{
        return 'Hello Breno'
    }
}
