import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';

import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppoinment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointment = await createAppoinment.execute({
      date: new Date(),
      provider_id: '12212121',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12212121');
  });
  it('should not be able to create two appointment on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppoinment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppoinment.execute({
      date: appointmentDate,
      provider_id: '12212121',
    });

    expect(
      createAppoinment.execute({
        date: appointmentDate,
        provider_id: '12212121',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
