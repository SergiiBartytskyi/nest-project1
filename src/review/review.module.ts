import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity';
import { MoviesService } from 'src/movies/movies.service';
import { MovieEntity } from 'src/movies/entities/movie.entity';
import { ActorEntity } from 'src/actor/entities/actor.entity';
import { MoviePosterEntity } from 'src/movies/entities/poster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewEntity,
      MovieEntity,
      ActorEntity,
      MoviePosterEntity,
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, MoviesService],
})
export class ReviewModule {}
