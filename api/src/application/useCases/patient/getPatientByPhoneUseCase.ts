import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from 'src/infra/database/prisma/repositories/patient.repository';

@Injectable()
export class GetPatientByPhoneUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}

  async execute(phone: string) {
    const INCLUDE_APPOINTMENT = true;
    const INCLUDE_DOCTOR = true;
    const patient = await this.patientRepository.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENT,
      INCLUDE_DOCTOR,
    );

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    return patient;
  }
}
