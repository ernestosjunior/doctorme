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

  getPatientById(id: string, includeAppointment: boolean = false) {
    return this.prismaService.patient.findUnique({
      where: { id },
      include: { appointment: includeAppointment },
    });
  }

  getUserByPhone(phone: string, includePatient: Boolean = false) {
    return this.prismaService.user.findUnique({
      where: { phone },
      include: { patient: !!includePatient },
    });
  }

  createUseAndPatient(
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
  ) {
    return this.prismaService.user.create({
      data: {
        phone,
        password,
        patient: {
          create: { firstName, lastName, phone },
        },
      },
    });
  }
}
