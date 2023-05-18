export interface LoginFormData {
	email: string;
	password: string;
}

export interface LoginResponseData {
	token: string;
}

export type RegisterFromData = LoginFormData & { username: string; contactPhone?: string };
export type RegisterResponseData = LoginResponseData;
