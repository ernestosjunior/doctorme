import { Controller, Get } from '@nestjs/common';
import { ListDoctorUseCase } from 'src/application/useCases/doctor/ListDoctor';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly listDoctorUseCase: ListDoctorUseCase) {}

  @Get('list')
  async listDoctor() {
    return this.listDoctorUseCase.execute();
  }
}
