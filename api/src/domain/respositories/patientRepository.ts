import { Patient, User } from '@prisma/client';

export abstract class PatientRepositoryAbstract {
  abstract getPatientByPhone(
    phone: string,
    includeAppointment: boolean,
    includeDoctor: boolean,
  ): Promise<Patient>;

  abstract getPatientById(
    id: string,
    includeAppointment: boolean,
  ): Promise<Patient>;

  abstract getUserByPhone(
    phone: string,
    includePatient: Boolean,
  ): Promise<User>;

  abstract createUserAndPatient(
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
  ): Promise<User>;
}
