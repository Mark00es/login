export interface NotificationPort{
    succes(message: string): void;
    info(message: string): void;
    error(message: string): void;
}