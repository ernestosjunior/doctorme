import { Controller, Get, Param } from '@nestjs/common';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';

@Controller('patient')
export class PatientController {
  constructor(
    private readonly getPatientByPhoneUseCase: GetPatientByPhoneUseCase,
  ) {}

  @Get(':phone')
  async getPatientByPhone(@Param('phone') phone: string) {
    return this.getPatientByPhoneUseCase.execute(phone);
  }
}
