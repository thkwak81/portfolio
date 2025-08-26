import {css} from 'styled-components';

export const dartTheme = {
	color: "#ffffff",
	bgColor: "#000000",
}

const util = {
  truncate: () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  scroll: () => css`
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      height: 25%;
      background: ${({ theme }) => theme.colors.indigo600};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.indigo300};
    }
  `,
};

const theme = {
	util,
}

export default theme;

export type Theme = typeof theme;
