import { Cascade, Collection, Entity, OneToMany } from "@mikro-orm/core";
import { Book } from "./book.entity";
import { BaseEntity } from "./_base.entity";

@Entity()
export class Author extends BaseEntity {
  @OneToMany("Book", "author", { cascade: [Cascade.ALL] })
  books = new Collection<Book>(this);
}
