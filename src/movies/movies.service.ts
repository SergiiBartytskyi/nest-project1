import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly moviesRepository: Repository<MovieEntity>,
  ) {}

  // create(createMovieDto: CreateMovieDto) {
  //   return `This action adds a new movie ${createMovieDto.title} ${createMovieDto.genre}`;
  // }

  async create(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.moviesRepository.create(dto);

    return await this.moviesRepository.save(movie);
  }

  async findAll(): Promise<MovieEntity[]> {
    return await this.moviesRepository.find({
      // where: {
      //   isAvailable: true,
      // },
      order: {
        createdAt: 'desc',
      },
      take: 10,
      // select: {
      //   id: true,
      //   title: true,
      //   releaseYear: true,
      // },
    });
  }

  async findOne(id: string): Promise<MovieEntity> {
    const movie = await this.moviesRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        releaseYear: true,
      },
    });

    if (!movie) throw new NotFoundException('Movie not found');

    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<boolean> {
    const movie = await this.findOne(id);

    Object.assign(movie, updateMovieDto);

    await this.moviesRepository.save(movie);

    return true;
  }

  async remove(id: string): Promise<string> {
    const movie = await this.findOne(id);

    await this.moviesRepository.remove(movie);

    return movie.id;
  }
}
