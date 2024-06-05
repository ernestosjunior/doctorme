import { BadRequestException, Injectable } from '@nestjs/common';
import { Doctor } from '@prisma/client';
import { DoctorRepository } from 'src/infra/database/repositories/Doctor';

@Injectable()
export class ListDoctorUseCase {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  async execute(): Promise<Doctor[]> {
    const doctors = await this.doctorRepository.listDoctor();

    if (!doctors) {
      throw new BadRequestException('No doctors found');
    }

    return doctors;
  }
}
