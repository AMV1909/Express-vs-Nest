import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(255)
    password: string;
}
