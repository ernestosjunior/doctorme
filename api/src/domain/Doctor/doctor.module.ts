import { Module } from '@nestjs/common';
import { ListDoctorUseCase } from 'src/application/useCases/doctor/ListDoctor';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ListDoctorUseCase],
  exports: [ListDoctorUseCase],
})
export class DoctorModule {}
