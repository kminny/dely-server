import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import User from "./User";

@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "double precision" })
  lat: number;

  @Column({ type: "double precision" })
  lng: number;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "boolean", default: false })
  fav: boolean;

  @ManyToOne(type => User, user => user.places)
  user: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}
export default Place;
