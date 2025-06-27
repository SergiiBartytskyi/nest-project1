import { ReviewEntity } from 'src/review/entities/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  // Generated,
  OneToMany,
  // PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}
@Entity('movies')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  // @PrimaryColumn()
  // @Generated('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
  })
  title: string;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({
    name: 'release_year',
  })
  releaseYear: number;

  // @Column({
  //   name: 'release_date',
  //   type: 'date',
  //   nullable: true,
  // })
  // releaseDate: string;
  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.DRAMA,
  })
  genre: Genre;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'is_available',
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isAvailable: boolean;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
