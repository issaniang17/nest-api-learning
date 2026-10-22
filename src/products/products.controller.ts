import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './createProduct.dto.js';
import { UpdateProductDto } from './updateProduct.dto.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService){}

    @Get()
    findAll(){
        return this.productService.findAllProducts()
    }
    @Get(':id')
    findOne(@Param('id') id:number){
        return this.productService.findOneProduct(id)
    }
    @Post()
    createProduct(@Body() product:CreateProductDto){
        return this.productService.createProduct(product)
    }

    @Patch(':id')
    updateProduct(@Param('id') id:number, @Body() updateProduct : UpdateProductDto){
        return this.productService.updateProduct(id, updateProduct)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteProduct(id)
    }
    
}
