import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Doctor } from '@prisma/client';

@Injectable()
export class DoctorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  listDoctor(): Promise<Doctor[]> {
    return this.prismaService.doctor.findMany({ include: { schedule: true } });
  }

  getDoctorById(id: string, includeSchedule: boolean = false) {
    return this.prismaService.doctor.findUnique({
      where: { id },
      include: { schedule: includeSchedule },
    });
  }
}
