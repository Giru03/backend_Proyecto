import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnfermedadesModule } from './enfermedades/enfermedades.module';
import { PlagasModule } from './plagas/plagas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3309,
      username: 'agrosoft',
      password: 'agrosoft123',
      database: 'db_agrosoft',
      autoLoadEntities: true,
      synchronize: true,
    }),

    EnfermedadesModule,
    PlagasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}