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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tbl_qlf_detail = void 0;
const typeorm_1 = require("typeorm");
let tbl_qlf_detail = class tbl_qlf_detail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'sp_seq' }),
    __metadata("design:type", Number)
], tbl_qlf_detail.prototype, "qlf_seq", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'qlf_gender' }),
    __metadata("design:type", Number)
], tbl_qlf_detail.prototype, "qlf_gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'qlf_age' }),
    __metadata("design:type", Number)
], tbl_qlf_detail.prototype, "qlf_age", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'qlf_location', length: 20 }),
    __metadata("design:type", String)
], tbl_qlf_detail.prototype, "qlf_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'qlf_emp' }),
    __metadata("design:type", Number)
], tbl_qlf_detail.prototype, "qlf_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'qlf_emp' }),
    __metadata("design:type", Number)
], tbl_qlf_detail.prototype, "qlf_sales", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'sp_finishat' }),
    __metadata("design:type", Date)
], tbl_qlf_detail.prototype, "qlf_openat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_qualification', length: 4000 }),
    __metadata("design:type", String)
], tbl_qlf_detail.prototype, "qlf_ex", void 0);
tbl_qlf_detail = __decorate([
    (0, typeorm_1.Entity)('tbl_qlf_detail', { schema: 'support24' })
], tbl_qlf_detail);
exports.tbl_qlf_detail = tbl_qlf_detail;
//# sourceMappingURL=tbl_qlf_detail.entity.js.map