import { LoginForm, SignUpForm } from './components';

export const AUTH_TABS = [
	{
		id: 'login',
		label: 'Log in',
		children: <LoginForm />
	},
	{
		id: 'signup',
		label: 'Sign up',
		children: <SignUpForm />
	}
];
