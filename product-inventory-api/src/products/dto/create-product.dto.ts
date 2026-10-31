import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    price: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    stock: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}