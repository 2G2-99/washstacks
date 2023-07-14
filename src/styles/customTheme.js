import { extendTheme } from '@chakra-ui/react';

import { Cabin, Roboto_Flex } from 'next/font/google';

export const cabin = Cabin({
	subsets: ['latin'],
	display: 'swap',
});
export const roboto_flex = Roboto_Flex({
	subsets: ['latin'],
	display: 'swap',
});

const customTheme = extendTheme({
	colors: {
		shade: '#e6f4fe',
		white: {
			50: '#FFFFFF',
			100: '#F7FAFC',
		},
		grey: {
			50: '#9C9EA3',
			100: '#585C62',
		},
		black: '#1B1B1B',
		blue: {
			50: '#bbebff',
			100: '#32a3f3',
			200: '#0890f1',
			300: '#2364aa',
			400: '#202B93',
		},
		lighterBlue: { 50: '#DCF5FF', 100: '#BAEBFF' },
		turquoise: { 50: '#93ECE5', 100: '#2FCCBF' },
		pink: { 50: '#FBB4C2', 100: '#EF8EA2' },
		yellow: { 50: '#FFE5AE', 100: '#ffd06d' },
		alert: {
			success: '#80b918',
			warning: '#ea7317',
			danger: '#d00000',
		},
	},

	fonts: {
		heading: cabin.style.fontFamily,
		body: roboto_flex.style.fontFamily,
	},
});

export default customTheme;
