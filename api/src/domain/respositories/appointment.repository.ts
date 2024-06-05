import { Appointment } from '@prisma/client';

export abstract class AppointmentRepositoryAbstract {
  abstract createAppointment(
    scheduleId: string,
    patientId: string,
    doctorId: string,
    date: Date,
  ): Promise<Appointment>;
}
