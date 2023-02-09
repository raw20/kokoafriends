var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { user } from "../db/user";
let User = class User {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], User.prototype, "user_code", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "kakao_id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "kakao_profile_img", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "kakao_nickname", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "kakao_email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "user_role", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], User.prototype, "create_time", void 0);
User = __decorate([
    ObjectType()
], User);
let UserResolver = class UserResolver {
    async user() {
        return user;
    }
};
__decorate([
    Query((returns) => [User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
