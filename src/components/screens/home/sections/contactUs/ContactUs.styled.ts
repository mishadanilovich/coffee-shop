import styled from 'styled-components';

export const Container = styled.section`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.section};
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing(2.5)};
`;

export const LeftContent = styled.div`
	flex: 1 1 450px;
	min-height: 450px;

	@media ${({ theme }) => theme.device.mobileM} {
		min-height: 350px;
	}
`;

export const mapStyles = {
	borderRadius: 10,
	height: '100%',
	width: '100%'
};

export const RightContent = styled.div`
	flex: 1 1 450px;
	padding: ${({ theme }) => theme.spacing(12.5, 5)};
	background: ${({ theme }) => theme.palette.lightBlack};
	border-radius: 10px;

	@media ${({ theme }) => theme.device.laptop} {
		padding: ${({ theme }) => theme.spacing(8, 5)};
	}

	@media ${({ theme }) => theme.device.mobileM} {
		padding: ${({ theme }) => theme.spacing(5)};
	}
`;
