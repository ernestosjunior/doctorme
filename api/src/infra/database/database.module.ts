import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DoctorRepository } from './repositories/doctor.repository';
import { PatientRepository } from './repositories/patient.repository';

@Module({
  providers: [PrismaService, DoctorRepository, PatientRepository],
  exports: [DoctorRepository, PatientRepository],
})
export class DatabaseModule {}
