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
exports.tbl_member = void 0;
const typeorm_1 = require("typeorm");
const tbl_site_entity_1 = require("./tbl_site.entity");
const tbl_support_entity_1 = require("./tbl_support.entity");
let tbl_member = class tbl_member {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'mb_id', length: 20 }),
    __metadata("design:type", String)
], tbl_member.prototype, "mb_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mb_pw', length: 20 }),
    __metadata("design:type", String)
], tbl_member.prototype, "mb_pw", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mb_name', length: 20 }),
    __metadata("design:type", String)
], tbl_member.prototype, "mb_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mb_email', length: 40 }),
    __metadata("design:type", String)
], tbl_member.prototype, "mb_email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tbl_site_entity_1.tbl_site, (site) => site.admin_id),
    __metadata("design:type", Array)
], tbl_member.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tbl_support_entity_1.tbl_support, (support) => support.admin_id),
    __metadata("design:type", Array)
], tbl_member.prototype, "support", void 0);
tbl_member = __decorate([
    (0, typeorm_1.Entity)('tbl_member', { schema: 'support24' })
], tbl_member);
exports.tbl_member = tbl_member;
//# sourceMappingURL=tbl_member.entity.js.map