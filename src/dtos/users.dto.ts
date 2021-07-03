import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
