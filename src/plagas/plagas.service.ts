import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plagas } from './entities/plagas.entity';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';

@Injectable()
export class PlagasService {
  constructor(
    @InjectRepository(Plagas)
    private repo: Repository<Plagas>,
  ) {}

  async create(dto: CreatePlagasDto) {
    const data = this.repo.create(dto);
    return await this.repo.save(data);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOneBy({ id_plagas: id });
  }

  async update(id: number, dto: UpdatePlagasDto) {
    await this.repo.update({ id_plagas: id }, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.repo.delete({ id_plagas: id });
  }
}