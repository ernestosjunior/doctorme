import { Module } from '@nestjs/common';
import { AuthenticatePatientUseCase } from 'src/application/useCases/patient/authenticatePatientUseCase';
import { CreateAppointmentUseCase } from 'src/application/useCases/patient/createAppointmentUseCase';
import { CreatePatientUseCase } from 'src/application/useCases/patient/createPatientUseCase';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetPatientByPhoneUseCase,
    CreatePatientUseCase,
    AuthenticatePatientUseCase,
    CreateAppointmentUseCase,
  ],
  exports: [
    GetPatientByPhoneUseCase,
    CreatePatientUseCase,
    AuthenticatePatientUseCase,
    CreateAppointmentUseCase,
  ],
})
export class PatientModule {}
