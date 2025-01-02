import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GstModuleBase } from "./base/gst.module.base";
import { GstService } from "./gst.service";
import { GstController } from "./gst.controller";
import { GstResolver } from "./gst.resolver";

@Module({
  imports: [GstModuleBase, forwardRef(() => AuthModule)],
  controllers: [GstController],
  providers: [GstService, GstResolver],
  exports: [GstService],
})
export class GstModule {}
