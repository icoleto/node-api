import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn({ name: '_id' })
  id: string;
  @Column()
  name: string;
  @Column({ name: 'lastname' })
  lastName: string;
  @Column()
  gender: string;
  @Column()
  country: string;
  @Column({ name: 'programming_languages' })
  programmingLanguages: Array<string>;
}
