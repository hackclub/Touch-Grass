import { PASSPHRASE } from '$env/static/private';

export const load = async ({ cookies }) => {
	const authCookie = cookies.get("auth");

	return {
		isAuthenticated: authCookie === PASSPHRASE,
	};
};
