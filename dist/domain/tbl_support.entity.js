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
exports.tbl_support = void 0;
const typeorm_1 = require("typeorm");
const tbl_member_entity_1 = require("./tbl_member.entity");
let tbl_support = class tbl_support {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'sp_seq' }),
    __metadata("design:type", Number)
], tbl_support.prototype, "sp_seq", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_name', length: 40 }),
    __metadata("design:type", String)
], tbl_support.prototype, "sp_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_field', length: 400 }),
    __metadata("design:type", String)
], tbl_support.prototype, "sp_field", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_size', length: 40 }),
    __metadata("design:type", String)
], tbl_support.prototype, "sp_size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'sp_startat' }),
    __metadata("design:type", Date)
], tbl_support.prototype, "sp_startat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'sp_finishat' }),
    __metadata("design:type", Date)
], tbl_support.prototype, "sp_finishat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'sp_qualification' }),
    __metadata("design:type", Number)
], tbl_support.prototype, "sp_qualification", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_url', length: 400 }),
    __metadata("design:type", String)
], tbl_support.prototype, "sp_url", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sp_src', length: 400 }),
    __metadata("design:type", String)
], tbl_support.prototype, "sp_src", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'admin_id', length: 20 }),
    __metadata("design:type", String)
], tbl_support.prototype, "admin_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tbl_member_entity_1.tbl_member, (member) => member.support),
    (0, typeorm_1.JoinColumn)({
        name: 'admin_id',
        referencedColumnName: 'mb_id'
    }),
    __metadata("design:type", tbl_member_entity_1.tbl_member)
], tbl_support.prototype, "member", void 0);
tbl_support = __decorate([
    (0, typeorm_1.Entity)('tbl_support', { schema: 'support24' })
], tbl_support);
exports.tbl_support = tbl_support;
//# sourceMappingURL=tbl_support.entity.js.map