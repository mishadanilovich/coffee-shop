export interface LoginFormData {
	email: string;
	password: string;
}

export type RegisterFromData = LoginFormData & { username: string; contactPhone: string };
