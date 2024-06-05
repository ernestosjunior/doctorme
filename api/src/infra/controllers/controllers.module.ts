import { Module } from '@nestjs/common';
import { DoctorController } from './Doctor';
import { ListDoctorUseCase } from 'src/application/useCases/doctor/ListDoctor';
import { DoctorModule } from 'src/domain/Doctor/doctor.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DoctorModule, DatabaseModule],
  controllers: [DoctorController],
})
export class ControllersModule {}
