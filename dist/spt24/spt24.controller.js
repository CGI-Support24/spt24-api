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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spt24Controller = void 0;
const common_1 = require("@nestjs/common");
const support_entity_1 = require("./entities/support.entity");
const spt24_service_1 = require("./spt24.service");
let Spt24Controller = class Spt24Controller {
    constructor(spt24Service) {
        this.spt24Service = spt24Service;
    }
    getAll() {
        return this.spt24Service.getAll();
    }
    getOne(sp_seq) {
        return this.spt24Service.getOne(sp_seq);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Spt24Controller.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':sp_seq'),
    __param(0, (0, common_1.Param)('sp_seq')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof support_entity_1.Support !== "undefined" && support_entity_1.Support) === "function" ? _a : Object)
], Spt24Controller.prototype, "getOne", null);
Spt24Controller = __decorate([
    (0, common_1.Controller)('spt24'),
    __metadata("design:paramtypes", [spt24_service_1.Spt24Service])
], Spt24Controller);
exports.Spt24Controller = Spt24Controller;
//# sourceMappingURL=spt24.controller.js.map