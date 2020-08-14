import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';

import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppoinment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppoinment = new CreateAppointmentService(fakeAppointmentsRepository);
  });
  it('should be able to create a new appointment', async () => {
    const appointment = await createAppoinment.execute({
      date: new Date(),
      provider_id: '12212121',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12212121');
  });
  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppoinment.execute({
      date: appointmentDate,
      provider_id: '12212121',
    });

    await expect(
      createAppoinment.execute({
        date: appointmentDate,
        provider_id: '12212121',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
