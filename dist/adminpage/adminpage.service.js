"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminpageService = void 0;
const common_1 = require("@nestjs/common");
let AdminpageService = class AdminpageService {
    constructor() {
        this.supports = [];
    }
    getAll() {
        return this.supports;
    }
    getOne(seq) {
        const support = this.supports.find(support => support.sp_seq === Number(seq));
        if (!support) {
            throw new common_1.NotFoundException(`${seq} not found`);
        }
        return support;
    }
    deleteOne(seq) {
        this.getOne(seq);
        this.supports = this.supports.filter(support => support.sp_seq !== Number(seq));
        return true;
    }
    update(id, updateData) {
        const support = this.getOne(id);
        this.deleteOne(id);
        this.supports.push(Object.assign(Object.assign({}, support), updateData));
    }
    create(spData) {
        this.supports.push(Object.assign({}, spData));
    }
};
AdminpageService = __decorate([
    (0, common_1.Injectable)()
], AdminpageService);
exports.AdminpageService = AdminpageService;
//# sourceMappingURL=adminpage.service.js.map