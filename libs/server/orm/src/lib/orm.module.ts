import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import {
  mikroOrmConfig,
  Author,
  Book,
} from "@mikro-orm-nx-workspace-example/database/entities";

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature([Author, Book]),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
