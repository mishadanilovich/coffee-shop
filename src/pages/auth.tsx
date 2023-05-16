import { Meta } from '@/components/seo';
import { Auth } from '@/components/screens';

const AuthPage = () => {
	return (
		<Meta title="Authentication" description="Authentication">
			<main>
				<Auth />
			</main>
		</Meta>
	);
};

export default AuthPage;
