import { Module } from '@nestjs/common';
import { GetDoctorByIdUseCase } from 'src/application/useCases/doctor/getDoctorByIdUseCase';
import { ListDoctorUseCase } from 'src/application/useCases/doctor/listDoctorUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ListDoctorUseCase, GetDoctorByIdUseCase],
  exports: [ListDoctorUseCase, GetDoctorByIdUseCase],
})
export class DoctorModule {}
