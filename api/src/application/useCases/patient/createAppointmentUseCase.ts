import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AppointmentRepository } from 'src/infra/database/repositories/appointment.repository';
import { PatientRepository } from 'src/infra/database/repositories/patient.repository';
import { ScheduleRepository } from 'src/infra/database/repositories/schedule.repository';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(
    private readonly patientRepository: PatientRepository,
    private readonly scheduleRepository: ScheduleRepository,
    private readonly appointmentRepository: AppointmentRepository,
  ) {}

  async execute(patientId: string, scheduleId: string) {
    const patient = await this.patientRepository.getPatientById(patientId);

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    const schedule = await this.scheduleRepository.getScheduleById(scheduleId);

    if (!schedule) {
      throw new NotFoundException('Schedule not found');
    }

    if (!schedule?.available) {
      throw new UnprocessableEntityException('Schedule not available');
    }

    const appointment = await this.appointmentRepository.createAppointment(
      schedule.id,
      patient.id,
      schedule.doctorId,
      schedule.date,
    );

    if (!appointment) {
      throw new UnprocessableEntityException('Error creating appointment');
    }

    return appointment;
  }
}
