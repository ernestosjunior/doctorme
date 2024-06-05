import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePatientUseCase } from 'src/application/useCases/patient/createPatientUseCase';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';

@Controller('patient')
export class PatientController {
  constructor(
    private readonly getPatientByPhoneUseCase: GetPatientByPhoneUseCase,
    private readonly createPatientUseCase: CreatePatientUseCase,
  ) {}

  @Get(':phone')
  async getPatientByPhone(@Param('phone') phone: string) {
    return this.getPatientByPhoneUseCase.execute(phone);
  }

  @Post()
  async createPatient(
    @Body()
    {
      phone,
      password,
      firstName,
      lastName,
    }: {
      phone: string;
      password: string;
      firstName: string;
      lastName: string;
    },
  ) {
    return this.createPatientUseCase.execute(
      phone,
      password,
      firstName,
      lastName,
    );
  }
}
