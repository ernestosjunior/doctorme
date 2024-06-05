import { Module } from '@nestjs/common';
import { GetPatientByPhoneUseCase } from 'src/application/useCases/patient/getPatientByPhoneUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GetPatientByPhoneUseCase],
  exports: [GetPatientByPhoneUseCase],
})
export class PatientModule {}
