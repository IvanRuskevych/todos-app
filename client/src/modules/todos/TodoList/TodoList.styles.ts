import { css } from '@emotion/css';
import { SIZES } from '~shared/styles/theme';
import { DEVICE } from '~shared/keys';

export const todosContainer = css`
	display: flex;
	flex-direction: column;
	gap: ${SIZES.m};

	@media ${DEVICE.tablet} {
		display: block;
	}
`;

export const wrapperMobilePagination = css`
	overflow-y: auto;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	gap: ${SIZES.xs};
`;
