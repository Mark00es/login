import type { NotificationPort } from './notification.port';
import { SonnerAdapter } from './notificationSonner.adapter';
import { OtroAdater } from './otro.adapter';

class NotificacionUseCase {
  private notificationAdapter: NotificationPort;

  constructor(notificationAdapter: NotificationPort) {
    this.notificationAdapter = notificationAdapter;
  }
  success(message: string) {
    this.notificationAdapter.succes(message);
  }
  info(message: string) {
    this.notificationAdapter.info(message);
  }
  error(message: string) {
    this.notificationAdapter.error(message);
  }
}

export const notify = new NotificacionUseCase(new SonnerAdapter());
export const notifyOtro = new NotificacionUseCase(new OtroAdater());
