import { toast } from 'sonner';
import { type NotificationPort } from './notification.port';

export class OtroAdater implements NotificationPort {
  succes(message: string): void {
    toast.warning(message);
  }
  info(message: string): void {
    toast.info(message);
  }
  error(message: string): void {
    toast.error(message);
  }
}
