import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorEntity } from './entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}
  async create(createActorDto: CreateActorDto): Promise<ActorEntity> {
    const { name } = createActorDto;

    const actor = this.actorRepository.create({ name });

    return await this.actorRepository.save(actor);
  }

  findAll() {
    return `This action returns all actor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
