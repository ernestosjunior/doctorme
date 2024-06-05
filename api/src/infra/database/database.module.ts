import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DoctorRepository } from './prisma/repositories/doctor.repository';
import { PatientRepository } from './prisma/repositories/patient.repository';
import { ScheduleRepository } from './prisma/repositories/schedule.repository';
import { AppointmentRepository } from './prisma/repositories/appointment.repository';

@Module({
  providers: [
    PrismaService,
    DoctorRepository,
    PatientRepository,
    ScheduleRepository,
    AppointmentRepository,
  ],
  exports: [
    DoctorRepository,
    PatientRepository,
    ScheduleRepository,
    AppointmentRepository,
  ],
})
export class DatabaseModule {}
