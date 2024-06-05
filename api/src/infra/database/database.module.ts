import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DoctorRepository } from './repositories/doctor.repository';
import { PatientRepository } from './repositories/patient.repository';
import { ScheduleRepository } from './repositories/schedule.repository';
import { AppointmentRepository } from './repositories/appointment.repository';

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
