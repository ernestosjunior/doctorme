import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Appointment } from '@prisma/client';
import { AppointmentRepositoryAbstract } from 'src/domain/respositories/appointment.repository';

@Injectable()
export class AppointmentRepository implements AppointmentRepositoryAbstract {
  constructor(private readonly prismaService: PrismaService) {}

  createAppointment(
    scheduleId: string,
    patientId: string,
    doctorId: string,
    date: Date,
  ): Promise<Appointment> {
    return this.prismaService.$transaction(async (prisma) => {
      await prisma.schedule.update({
        where: { id: scheduleId },
        data: { available: false },
      });

      const appointment = await prisma.appointment.create({
        data: { patientId, doctorId, date },
      });

      return appointment;
    });
  }
}
