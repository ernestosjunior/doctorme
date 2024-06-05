import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Doctor } from '@prisma/client';
import { DoctorRepositoryAbstract } from 'src/domain/respositories/doctor.repository';

@Injectable()
export class DoctorRepository implements DoctorRepositoryAbstract {
  constructor(private readonly prismaService: PrismaService) {}

  listDoctor(): Promise<Doctor[]> {
    return this.prismaService.doctor.findMany({ include: { schedule: true } });
  }

  getDoctorById(id: string, includeSchedule: boolean = false): Promise<Doctor> {
    return this.prismaService.doctor.findUnique({
      where: { id },
      include: { schedule: includeSchedule },
    });
  }
}
