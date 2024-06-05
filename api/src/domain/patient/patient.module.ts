import { Module } from '@nestjs/common';
import { CreatePatientUseCase } from 'src/application/useCases/patient/createPatientUseCase';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GetPatientByPhoneUseCase, CreatePatientUseCase],
  exports: [GetPatientByPhoneUseCase, CreatePatientUseCase],
})
export class PatientModule {}
