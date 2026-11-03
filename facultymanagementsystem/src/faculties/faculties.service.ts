import { faculties } from './../entity/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { FacultiesModule } from './faculties.module.js';
import { createFacultyDto } from '../dto/create-faculties.dto.js';

@Injectable()
export class FacultiesService {

    constructor(
        @InjectRepository(faculties)
        private readonly facultiesRepo: Repository<faculties>,
    ){}


    
    async create(dto:createFacultyDto){
        const faculties = this.facultiesRepo.create(dto); 
        const saved= await this.facultiesRepo.save(faculties);

        return saved

    }
}
