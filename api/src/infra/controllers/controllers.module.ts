import { Module } from '@nestjs/common';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorModule } from 'src/domain/doctor/doctor.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DoctorModule, DatabaseModule],
  controllers: [DoctorController],
})
export class ControllersModule {}
