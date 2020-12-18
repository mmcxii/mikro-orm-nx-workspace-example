import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity({
  abstract: true,
})
export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;
}
