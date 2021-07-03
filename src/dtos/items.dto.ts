import { IsNumber, IsString } from "class-validator";

export class CreateItemDto {
    @IsString()
    public name: string;

    @IsNumber()
    public price: number;

    @IsNumber()
    public stock: number;
}