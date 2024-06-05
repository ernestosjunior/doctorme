import { Doctor } from '@prisma/client';

export abstract class DoctorRepositoryAbstract {
  abstract listDoctor(): Promise<Doctor[]>;

  abstract getDoctorById(id: string, includeSchedule: boolean): Promise<Doctor>;
}
