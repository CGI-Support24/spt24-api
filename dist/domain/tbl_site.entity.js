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
exports.tbl_site = void 0;
const typeorm_1 = require("typeorm");
const tbl_member_entity_1 = require("./tbl_member.entity");
let tbl_site = class tbl_site {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'site_seq' }),
    __metadata("design:type", Number)
], tbl_site.prototype, "site_seq", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'site_name', length: 40 }),
    __metadata("design:type", String)
], tbl_site.prototype, "site_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'site_url', length: 400 }),
    __metadata("design:type", String)
], tbl_site.prototype, "site_url", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'site_owner', length: 40 }),
    __metadata("design:type", String)
], tbl_site.prototype, "site_owner", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'admin_id', length: 20 }),
    __metadata("design:type", String)
], tbl_site.prototype, "admin_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tbl_member_entity_1.tbl_member, (member) => member.site),
    (0, typeorm_1.JoinColumn)({
        name: 'admin_id',
        referencedColumnName: 'mb_id'
    }),
    __metadata("design:type", tbl_member_entity_1.tbl_member)
], tbl_site.prototype, "member", void 0);
tbl_site = __decorate([
    (0, typeorm_1.Entity)('tbl_site', { schema: 'support24' })
], tbl_site);
exports.tbl_site = tbl_site;
//# sourceMappingURL=tbl_site.entity.js.map