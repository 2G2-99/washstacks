import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
