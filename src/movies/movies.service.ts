import { Injectable } from '@nestjs/common';
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
      where: {
        isPublic: true,
      },
      order: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
