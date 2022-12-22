import { Module } from "@nestjs/common";
import { AdminpageController } from "./adminpage.controller";
import { AdminpageService } from "./adminpage.service";

@Module({
    controllers: [AdminpageController],
    providers: [AdminpageService]
  })
  export class AdminpageModule {}