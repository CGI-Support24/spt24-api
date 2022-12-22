import { Controller } from '@nestjs/common';
import { Body,Delete,Get,Param,Patch,Post,Query } from "@nestjs/common";
import { tbl_support } from "../domain/tbl_support.entity";
import { AdminpageService } from "./adminpage.service";



@Controller('adminpage')
export class AdminpageController {

    constructor(private readonly adminpageService: AdminpageService) {}

    @Get()
    getAll(): tbl_support[] {
      return this.adminpageService.getAll();
    }

    @Get("/:seq")
    getOne(@Param("seq") sp_seq: number): tbl_support {
      return this.adminpageService.getOne(sp_seq);
    }

    @Delete("/:seq")
    remove(@Param("seq") sp_seq: number) {
      return this.adminpageService.deleteOne(sp_seq);
    }

    @Patch("/:seq")
    patch(@Param("seq") sp_seq: number, @Body() updateData: any) {
      // any는 관리자화면 다 나오면 채울 예정
        return this.adminpageService.update(sp_seq, updateData);
    }

}
