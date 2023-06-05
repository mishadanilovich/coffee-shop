import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { NotificationProps, NotificationType } from './Notification.interface';

export const Notification = ({ type, message }: NotificationProps) => {
	Notify.init({
		distance: '12px',
		width: '250px',
		borderRadius: '10px',
		fontFamily: 'Roboto',
		pauseOnHover: true,
		showOnlyTheLastOne: true
	});

	if (type === NotificationType.success) {
		return Notify.success(message);
	}

	if (type === NotificationType.failure) {
		return Notify.failure(message);
	}

	if (type === NotificationType.info) {
		return Notify.info(message);
	}

	if (type === NotificationType.warning) {
		return Notify.warning(message);
	}

	return null;
};
