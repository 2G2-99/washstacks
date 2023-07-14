import { useEffect, useState } from 'react';
import Navbar from '../navigation/Navbar';
import { Box, Slide } from '@chakra-ui/react';
import ScrolledNavbar from '../navigation/ScrolledNavbar';

export default function Header({ home = false }) {
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
				<Slide in={isScrolled !== 0} direction="top">
					<ScrolledNavbar />
				</Slide>
			)}
		</Box>
	);
}
