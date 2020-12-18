import { Entity, ManyToOne } from "@mikro-orm/core";
import { BaseEntity } from "./_base.entity";
import { Author } from "./author.entity";

@Entity()
export class Book extends BaseEntity {
  @ManyToOne("Author")
  author: Author;
}
