import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PatientRepository } from 'src/infra/database/prisma/repositories/patient.repository';
import { comparePassword, generateToken } from 'src/infra/helpers/security';

@Injectable()
export class AuthenticatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}

  async execute(phone: string, password: string) {
    const user = await this.patientRepository.getUserByPhone(phone);

    if (!user) {
      throw new NotFoundException('Patient not found');
    }

    const isPasswordCorrect = comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      user: {
        id: user.id,
        phone: user.phone,
      },
    };

    const token = generateToken(payload);

    return { token };
  }
}
