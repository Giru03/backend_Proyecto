import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Enfermedade } from './entities/enfermedade.entity';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';





@Injectable()
export class EnfermedadesService {
  constructor(
    @InjectRepository(Enfermedade)
    private repo: Repository<Enfermedade>,
  ) {}

  async create(dto: CreateEnfermedadeDto) {
    const enfermedad = this.repo.create(dto);
    return this.repo.save(enfermedad);
  }
  async findAll() {
    return this.repo.find();
  }   
  async findOne(id: number) {
    return this.repo.findOneBy({ id_enfermedad: id });
  }
  async update(id: number, dto: UpdateEnfermedadeDto) {
    await this.repo.update({ id_enfermedad: id }, dto);
    return this.repo.findOneBy({ id_enfermedad: id });
  }
  async remove(id: number) {
    await this.repo.delete({ id_enfermedad: id });
    return { deleted: true };
  }   }


