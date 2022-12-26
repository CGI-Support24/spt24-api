"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminpageController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const tbl_support_entity_1 = require("../domain/tbl_support.entity");
const adminpage_service_1 = require("./adminpage.service");
let AdminpageController = class AdminpageController {
    constructor(adminpageService) {
        this.adminpageService = adminpageService;
    }
    getAll() {
        return this.adminpageService.getAll();
    }
    getOne(sp_seq) {
        return this.adminpageService.getOne(sp_seq);
    }
    remove(sp_seq) {
        return this.adminpageService.deleteOne(sp_seq);
    }
    patch(sp_seq, updateData) {
        return this.adminpageService.update(sp_seq, updateData);
    }
    create(spData) {
        return this.adminpageService.create(spData);
    }
};
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AdminpageController.prototype, "getAll", null);
__decorate([
    (0, common_2.Get)("/:seq"),
    __param(0, (0, common_2.Param)("seq")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", tbl_support_entity_1.tbl_support)
], AdminpageController.prototype, "getOne", null);
__decorate([
    (0, common_2.Delete)("/:seq"),
    __param(0, (0, common_2.Param)("seq")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminpageController.prototype, "remove", null);
__decorate([
    (0, common_2.Patch)("/:seq"),
    __param(0, (0, common_2.Param)("seq")),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AdminpageController.prototype, "patch", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminpageController.prototype, "create", null);
AdminpageController = __decorate([
    (0, common_1.Controller)('adminpage'),
    __metadata("design:paramtypes", [adminpage_service_1.AdminpageService])
], AdminpageController);
exports.AdminpageController = AdminpageController;
//# sourceMappingURL=adminpage.controller.js.map