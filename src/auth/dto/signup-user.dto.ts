import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

// TODO: connect with CreateUserDto
export class SignupUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(12)
  password: string;

  @IsString()
  @IsOptional()
  name?: string;
}
