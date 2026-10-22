import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity.js';
import { Repository } from 'typeorm';
import { CreateProductDto } from './createProduct.dto.js';
import { UpdateProductDto } from './updateProduct.dto.js';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository : Repository<Product>

    ){}

    async findAllProducts(): Promise<Product[]>{
        return await this.productRepository.find()
    }

    async createProduct(product : CreateProductDto):Promise<Product>{
        return await this.productRepository.save(product)
    }

    async findOneProduct(id:number):Promise<Product | null>{
        return await this.productRepository.findOneBy({id})
    }

    async updateProduct(id:number, updateProduct: UpdateProductDto):Promise<Product | null>{
        await this.productRepository.update(id, updateProduct)
        return this.productRepository.findOneBy({id})
    }

    async deleteProduct(id:number):Promise<void>{
        await this.productRepository.delete(id)
    }
}
