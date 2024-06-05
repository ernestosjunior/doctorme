import { Schedule } from '@prisma/client';

export abstract class ScheduleRepositoryAbstract {
  abstract getScheduleById(id: string): Promise<Schedule>;
}
