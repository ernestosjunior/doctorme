import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getPatientByPhone(
    phone: string,
    includeAppointment: boolean = false,
    includeDoctor: boolean = false,
  ) {
    return this.prismaService.patient.findUnique({
      where: { phone },
      include: {
        appointment: !includeAppointment
          ? false
          : { include: { doctor: includeDoctor } },
      },
    });
  }
}
