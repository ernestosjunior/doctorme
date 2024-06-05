import { Module } from '@nestjs/common';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorModule } from 'src/domain/doctor/doctor.module';
import { DatabaseModule } from '../database/database.module';
import { PatientController } from './patient/patient.controller';
import { PatientModule } from 'src/domain/patient/patient.module';

@Module({
  imports: [DoctorModule, DatabaseModule, PatientModule],
  controllers: [DoctorController, PatientController],
})
export class ControllersModule {}
