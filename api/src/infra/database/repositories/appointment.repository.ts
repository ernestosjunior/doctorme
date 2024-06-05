import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createAppointment(
    scheduleId: string,
    patientId: string,
    doctorId: string,
    date: Date,
  ) {
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
