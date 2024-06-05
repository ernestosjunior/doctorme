import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthenticatePatientUseCase } from 'src/application/useCases/patient/authenticatePatientUseCase';
import { CreateAppointmentUseCase } from 'src/application/useCases/patient/createAppointmentUseCase';
import { CreatePatientUseCase } from 'src/application/useCases/patient/createPatientUseCase';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';

@Controller('patient')
export class PatientController {
  constructor(
    private readonly getPatientByPhoneUseCase: GetPatientByPhoneUseCase,
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly authenticatePatientUseCase: AuthenticatePatientUseCase,
    private readonly createAppointmentUseCase: CreateAppointmentUseCase,
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

  @Post('authenticate')
  async authenticatePatient(
    @Body() { phone, password }: { phone: string; password: string },
  ) {
    return this.authenticatePatientUseCase.execute(phone, password);
  }

  @Post(':patientId/appointment')
  async createAppointment(
    @Param('patientId') patientId: string,
    @Body() { scheduleId }: { scheduleId: string },
  ) {
    return this.createAppointmentUseCase.execute(patientId, scheduleId);
  }
}
