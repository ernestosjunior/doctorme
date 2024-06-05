import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ScheduleRepositoryAbstract } from 'src/domain/respositories/schedule.repository';

@Injectable()
export class ScheduleRepository implements ScheduleRepositoryAbstract {
  constructor(private readonly prismaService: PrismaService) {}

  getScheduleById(id: string) {
    return this.prismaService.schedule.findUnique({ where: { id } });
  }
}
