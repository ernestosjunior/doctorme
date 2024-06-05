import { Injectable, NotFoundException } from '@nestjs/common';
import { DoctorRepository } from 'src/infra/database/repositories/doctor.repository';

@Injectable()
export class GetDoctorByIdUseCase {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  async execute(doctorId: string) {
    const INCLUDE_SCHEDULE = true;
    const doctor = await this.doctorRepository.getDoctorById(
      doctorId,
      INCLUDE_SCHEDULE,
    );

    if (!doctor) {
      throw new NotFoundException('No doctor found');
    }

    return doctor;
  }
}
