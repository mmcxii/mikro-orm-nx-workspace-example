import { Module } from "@nestjs/common";
import { OrmModule } from "@mikro-orm-nx-workspace-example/server/orm";

@Module({
  imports: [OrmModule],
})
export class AppModule {}
