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
exports.tbl_business = void 0;
const typeorm_1 = require("typeorm");
const tbl_member_entity_1 = require("./tbl_member.entity");
let tbl_business = class tbl_business {
    constructor() {
        this.member = tbl_member_entity_1.tbl_member;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'bs_seq' }),
    __metadata("design:type", Number)
], tbl_business.prototype, "bs_seq", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mb_id', length: 20 }),
    __metadata("design:type", String)
], tbl_business.prototype, "mb_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bs_name', length: 20 }),
    __metadata("design:type", String)
], tbl_business.prototype, "bs_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bs_location', length: 400 }),
    __metadata("design:type", String)
], tbl_business.prototype, "bs_location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bs_type', length: 20 }),
    __metadata("design:type", String)
], tbl_business.prototype, "bs_type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bs_count', length: 20 }),
    __metadata("design:type", String)
], tbl_business.prototype, "bs_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bs_opendate' }),
    __metadata("design:type", Date)
], tbl_business.prototype, "bs_opendate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tbl_member_entity_1.tbl_member, (member) => member.mb_id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], tbl_business.prototype, "member", void 0);
tbl_business = __decorate([
    (0, typeorm_1.Entity)('tbl_business', { schema: 'support24' })
], tbl_business);
exports.tbl_business = tbl_business;
//# sourceMappingURL=tbl_business.entity.js.map