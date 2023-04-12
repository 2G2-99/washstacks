import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
	colors: {
		brand: {
			100: '#2364aaff',
			200: '#3da5d9ff',
			300: '#73bfb8ff',
			400: '#fec601ff',
			500: '#ea7317ff',
			600: '#d00000',
			700: '#80b918',
			800: '#1B1B1B',
			900: '#F7F7F7',
		},
	},
	fonts: {
		heading: `Cabin, sans-serif`,
		body: `Roboto Flex, sans-serif`,
	},
});
