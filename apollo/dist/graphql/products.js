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
], Products.prototype, "sId", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "sName", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "sTitle", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "sContents", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "sPrice", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "sLike", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Products.prototype, "sView", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "sHalf_title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "sCategory", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "slideImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "mainTopImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "mainMidImg", void 0);
__decorate([
    Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Products.prototype, "mainBottomImg", void 0);
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
