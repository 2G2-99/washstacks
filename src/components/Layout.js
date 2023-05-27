import { Box, Slide } from '@chakra-ui/react';
import Head from 'next/head';

import Navbar from './navigation/Navbar';
import { Link } from '@chakra-ui/next-js';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import ScrolledNavbar from './navigation/ScrolledNavbar';

export default function Layout({ children, home = false }) {
	const [isScrolled, setIsScrolled] = useState(0);

	const handleScroll = () => {
		setIsScrolled(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolled]);

	return (
		<Box>
			<Head>
				<meta
					name="WashStacks"
					content="Laundry & Dry cleaning delivery service"
				/>
			</Head>
			<Box
				as="header"
				position="fixed"
				top="0"
				left="0"
				right="0"
				w="100%"
				zIndex={10}
			>
				{home && isScrolled === 0 ? (
					<Navbar />
				) : (
					<Slide in={isScrolled} direction="top">
						<ScrolledNavbar />
					</Slide>
				)}
			</Box>
			<main>
				{children}
				{home ? null : <Link href="/">← Back to home</Link>}
			</main>
			<Footer />
		</Box>
	);
}
