import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	colors: {
		shade: '#e6f4fe',
		blue: {
			50: '#bbebff',
			100: '#32a3f3',
			200: '#0890f1',
			300: '#2364aa',
			400: '#202B93',
		},
		alert: {
			success: '#80b918',
			warning: '#ea7317',
			danger: '#d00000',
		},
		brand: {
			turquoise: '#2fccc0',
			yellow: '#ffd06d',
			black: '#1B1B1B',
			grey: '#585C62',
			white: '#F7F7F7',
		},
	},

	fonts: {
		heading: `Cabin, sans-serif`,
		body: `Roboto Flex, sans-serif`,
	},
});

export default customTheme;
