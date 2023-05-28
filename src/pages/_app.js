import { ChakraProvider } from '@chakra-ui/react';

// Theme
import customTheme from '@/styles/customTheme';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider
			resetCSS
			theme={customTheme}
		>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
