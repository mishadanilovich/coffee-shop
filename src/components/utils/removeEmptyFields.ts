export const removeEmptyFields = <T>(obj: Record<string, any>): T => {
	return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== null)) as T;
};
