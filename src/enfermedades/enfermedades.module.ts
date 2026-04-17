import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnfermedadesService } from './enfermedades.service';
import { EnfermedadesController } from './enfermedades.controller';
import { Enfermedade } from './entities/enfermedade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enfermedade])], //
  controllers: [EnfermedadesController],
  providers: [EnfermedadesService],
})
export class EnfermedadesModule {}