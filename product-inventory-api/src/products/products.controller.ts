import { Controller, Delete,Get,Post,Patch,Put, Body, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { ParseIntPipe } from '@nestjs/common';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() dto:CreateProductDto){
    return this.productsService.create(dto);
  }

  @Get()
  getAllProducts(){
    return this.productsService.getAllProducts();
  }
 
  @Get('search')
  search(@Query('keyword') keyword:string){
    return this.productsService.search(keyword);

  }

  @Get('category/:cat')
  findByCategory(@Param('cat') category:string){
    return this.productsService.findByCategory(category);
  }

  @Get(':id')
  getProductById(@Param('id',ParseIntPipe) id:number){
    return this.productsService.getProductById(id);

  }

  @Patch(':id')
  UpdateProduct(@Param('id',ParseIntPipe) id:number, @Body() dto:PartialUpdateProductDto){
    return this.productsService.UpdateProduct(id,dto);

  }

  @Put(':id')
  replace(@Param('id',ParseIntPipe) id:number, @Body() dto:UpdateProductDto){
    return this.productsService.replace(id,dto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id:number){
    return this.productsService.remove(id);

  }

  @Patch(':id/toggle')
  toggleActive(@Param('id',ParseIntPipe) id:number){
    return this.productsService.toggleActive(id);

  }
}
