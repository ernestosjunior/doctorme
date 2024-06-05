import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScheduleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getScheduleById(id: string) {
    return this.prismaService.schedule.findUnique({ where: { id } });
  }
}
