import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DoctorRepository } from './repositories/Doctor';

@Module({
  providers: [PrismaService, DoctorRepository],
  exports: [DoctorRepository],
})
export class DatabaseModule {}
