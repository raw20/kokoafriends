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
import * as jf from "joiful";
import { Arg, ID, Mutation, ObjectType, ArgsType, Args, Int, } from "type-graphql";
import { Field, Query, Resolver } from "type-graphql";
import { addUser, userById, users } from "../db/user.js";
let User = class User {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], User.prototype, "user_code", void 0);
__decorate([
    Field((type) => ID),
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
let AddUserArgs = class AddUserArgs {
};
__decorate([
    Field((type) => Int),
    jf.number().required().min(0),
    __metadata("design:type", Number)
], AddUserArgs.prototype, "user_code", void 0);
__decorate([
    Field((type) => ID),
    jf.string().required().min(0),
    __metadata("design:type", String)
], AddUserArgs.prototype, "kakao_id", void 0);
__decorate([
    Field((type) => String),
    jf.string().required().min(0),
    __metadata("design:type", String)
], AddUserArgs.prototype, "kakao_profile_img", void 0);
__decorate([
    Field((type) => String),
    jf.string().required().min(0),
    __metadata("design:type", String)
], AddUserArgs.prototype, "kakao_nickname", void 0);
__decorate([
    Field((type) => String),
    jf.string().required().min(0),
    __metadata("design:type", String)
], AddUserArgs.prototype, "kakao_email", void 0);
__decorate([
    Field((type) => String),
    jf.string().required().min(0),
    __metadata("design:type", String)
], AddUserArgs.prototype, "user_role", void 0);
__decorate([
    Field((type) => Date),
    jf.date().required().min(0),
    __metadata("design:type", Date)
], AddUserArgs.prototype, "create_time", void 0);
AddUserArgs = __decorate([
    ArgsType()
], AddUserArgs);
export { AddUserArgs };
let UserResolver = class UserResolver {
    async users() {
        return users();
    }
    async user(id) {
        return userById(id);
    }
    async addUser(options) {
        return addUser(options.user_code, options.kakao_id, options.kakao_profile_img, options.kakao_nickname, options.kakao_email, options.user_role, options.create_time);
    }
};
__decorate([
    Query((returns) => [User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    Query((returns) => [User]),
    __param(0, Arg("id", (type) => ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    Mutation((returns) => User),
    __param(0, Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "addUser", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
