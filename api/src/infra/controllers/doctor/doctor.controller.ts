import { Controller, Get, Param } from '@nestjs/common';
import { GetDoctorByIdUseCase } from 'src/application/useCases/doctor/getDoctorByIdUseCase';
import { ListDoctorUseCase } from 'src/application/useCases/doctor/listDoctorUseCase';

@Controller('doctor')
export class DoctorController {
  constructor(
    private readonly listDoctorUseCase: ListDoctorUseCase,
    private readonly getDoctorByIdUseCase: GetDoctorByIdUseCase,
  ) {}

  @Get('list')
  async listDoctor() {
    return this.listDoctorUseCase.execute();
  }

  @Get(':id')
  async getDoctorById(@Param('id') id: string) {
    return this.getDoctorByIdUseCase.execute(id);
  }
}
