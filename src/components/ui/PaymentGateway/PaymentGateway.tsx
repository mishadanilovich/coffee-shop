import { FC, PropsWithChildren } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

export const PaymentGateway: FC<PropsWithChildren> = ({ children }) => {
	return <Elements stripe={stripePromise}>{children}</Elements>;
};
