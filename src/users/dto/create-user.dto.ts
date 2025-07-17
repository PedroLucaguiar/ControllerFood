import { IsNotEmpty, IsString, MinLength, Length, IsOptional, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  shift: string;

  @IsOptional()
  @IsUrl()
  photoUrl?: string;

  @IsNotEmpty()
  @IsString()
  qrCode: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
