export interface User {
	id: string;
	username: string;
	email: string;
	contactPhone?: string;
	address?: string;
}

export type UpdateUser = Partial<User>;
