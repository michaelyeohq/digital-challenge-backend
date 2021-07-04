import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public type: string;

  @IsOptional()
  @IsNumber()
  public price: number;

  @IsOptional()
  @IsNumber()
  public stock: number;

  @IsOptional()
  @IsString()
  public manufacturer: string;
}
