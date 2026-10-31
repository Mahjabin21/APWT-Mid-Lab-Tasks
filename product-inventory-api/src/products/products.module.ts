import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
