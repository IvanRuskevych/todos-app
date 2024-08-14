import { css } from '@emotion/css';
import { THEME, BREAKPOINTS } from '~shared/styles/theme';

export const formStyle = css`
	display: flex;
	flex-direction: column;
	gap: ${THEME.spaces.medium};

	@media (max-width: ${BREAKPOINTS.mobile}) {
		gap: ${THEME.spaces.small};
	}
`;

export const buttonGroupStyle = css`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const container = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
