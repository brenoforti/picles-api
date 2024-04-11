import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsNumberString()
    //@IsPhoneNumber()
    @Length(10,11)
    @IsNotEmpty()
    whatsapp: string
    @IsString()
    @IsNumberString()
    //@IsPhoneNumber()
    @Length(10,11)
    @IsNotEmpty()
    phone: string
}