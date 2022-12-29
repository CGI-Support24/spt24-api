"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("./orm.config");
const config_1 = require("@nestjs/config");
const spt24_controller_1 = require("./spt24/spt24.controller");
const spt24_service_1 = require("./spt24/spt24.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({ useFactory: orm_config_1.ormConfig }),
            config_1.ConfigModule.forRoot({
<<<<<<< Updated upstream
                isGlobal: true
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
=======
                isGlobal: true,
            }),
        ],
        controllers: [spt24_controller_1.Spt24Controller],
        providers: [spt24_service_1.Spt24Service],
>>>>>>> Stashed changes
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map