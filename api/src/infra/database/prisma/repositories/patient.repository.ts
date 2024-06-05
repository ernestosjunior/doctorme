import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Patient, User } from '@prisma/client';
import { PatientRepositoryAbstract } from 'src/domain/respositories/patientRepository';

@Injectable()
export class PatientRepository implements PatientRepositoryAbstract {
  constructor(private readonly prismaService: PrismaService) {}

  getPatientByPhone(
    phone: string,
    includeAppointment: boolean = false,
    includeDoctor: boolean = false,
  ): Promise<Patient> {
    return this.prismaService.patient.findUnique({
      where: { phone },
      include: {
        appointment: !includeAppointment
          ? false
          : { include: { doctor: includeDoctor } },
      },
    });
  }

  getPatientById(
    id: string,
    includeAppointment: boolean = false,
  ): Promise<Patient> {
    return this.prismaService.patient.findUnique({
      where: { id },
      include: { appointment: includeAppointment },
    });
  }

  getUserByPhone(
    phone: string,
    includePatient: Boolean = false,
  ): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { phone },
      include: { patient: !!includePatient },
    });
  }

  createUserAndPatient(
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
  ): Promise<User> {
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
