import { Controller } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { createFacultyDto } from '../dto/create-faculties.dto.js';
import { Post,Body } from '@nestjs/common';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create')
  create(@Body() dto:createFacultyDto){
    return this.facultiesService.create(dto);
  }
}
