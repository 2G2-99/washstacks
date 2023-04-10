import { Box, Button } from '@chakra-ui/react';
import Head from 'next/head';

import Navbar from './Navbar';
import { Link } from '@chakra-ui/next-js';
export const siteTitle = 'WashStacks';

export default function Layout({ children, home }) {
	return (
		<Box>
			<Head>
				<meta
					name="WashStacks"
					content="Laundry & Dry cleaning delivery service"
				/>
			</Head>
			<Box as="header" position={'fixed'} w={'100%'}>
				{home || !home ? <Navbar /> : null}
			</Box>
			<main>
				{children}
				{!home && <Link href="/">← Back to home</Link>}
			</main>
		</Box>
	);
}
