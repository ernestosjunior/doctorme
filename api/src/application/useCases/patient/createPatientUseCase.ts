import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PatientRepository } from 'src/infra/database/repositories/patient.repository';
import { hashPassword } from 'src/infra/helpers/security';

@Injectable()
export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}

  async execute(
    phone: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    const _patient = await this.patientRepository.getPatientByPhone(phone);

    if (_patient) {
      throw new ConflictException(
        'Patient already exists with this phone number',
      );
    }

    const hash = hashPassword(password);

    const user = await this.patientRepository.createUseAndPatient(
      firstName,
      lastName,
      phone,
      hash,
    );

    if (!user) {
      throw new UnprocessableEntityException('Error creating user');
    }

    const { password: _, ...userData } = user;

    return userData;
  }
}
