export enum NotificationType {
	success = 'success',
	failure = 'failure',
	warning = 'warning',
	info = 'info'
}

export interface NotificationProps {
	type: NotificationType;
	message: string;
}
