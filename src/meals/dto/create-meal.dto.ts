import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
