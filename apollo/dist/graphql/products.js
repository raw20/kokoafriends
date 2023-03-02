var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Arg, ObjectType, Field, Resolver, Mutation, Int, Query, } from "type-graphql";
import { products } from "../db/products.js";
import { productById } from "../db/products.js";
import { countView } from "../db/products.js";
let Products = class Products {
};
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "products_id", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "products_name", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "products_title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "products_contents", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "products_price", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "products_like", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "products_view", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "products_half_title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "products_category", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "products_slideImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "products_mainTopImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "products_mainMidImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "products_mainBottomImg", void 0);
Products = __decorate([
    ObjectType()
], Products);
let ProductsResolver = class ProductsResolver {
    async products() {
        return products();
    }
    async product(id) {
        return productById(id);
    }
    countViews(id) {
        return countView(id);
    }
};
__decorate([
    Query((returns) => [Products]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "products", null);
__decorate([
    Query((returns) => Products),
    __param(0, Arg("id", (type) => Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "product", null);
__decorate([
    Mutation((returns) => Products),
    __param(0, Arg("id", (type) => Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "countViews", null);
ProductsResolver = __decorate([
    Resolver(Products)
], ProductsResolver);
export { ProductsResolver };
