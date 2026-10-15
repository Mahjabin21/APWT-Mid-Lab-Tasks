import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateCourseDto {

    @IsNotEmpty({ message: "name should not be empty", })
    @IsString({ message: "name should be in string type" })
    name: string;


    @IsString()
    @IsNotEmpty()
    //@Type(() => Number)
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(6)
    credits: number;

    @IsString()
    @IsOptional()
    description?: string;


}