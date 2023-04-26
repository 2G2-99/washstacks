import {
	Flex,
	IconButton,
	Button,
	Collapse,
	useBreakpointValue,
	useDisclosure,
	Spacer,
	HStack,
	Box,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../../assets/svg/brand/Logo.svg';
import Logo_v1 from '../../assets/svg/brand/v1.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { Link } from '@chakra-ui/next-js';

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	const bgColor = scrollPosition === 0 ? 'brand.100' : 'transparent';
	const boxShadow = scrollPosition === 0 ? 'none' : 'xl';
	const brandLogo = scrollPosition === 0 ? <Logo /> : <Logo_v1 />;

	return (
		<>
			<Flex
				as={'nav'}
				minH={'60px'}
				py={{ base: '1.5rem', md: '2rem' }}
				px={{ base: '1rem', md: '2.25rem' }}
				align={'center'}
				background={bgColor}
				boxShadow={boxShadow}
				backdropFilter="auto"
				backdropBlur={'6px'}
				transition="all 0.2s ease-in-out"
			>
				<Box mr={{ lg: '10' }}>
					<Link href={'/'}>{brandLogo}</Link>
				</Box>
				<Flex display={{ base: 'none', lg: 'block' }}>
					<DesktopNav />
				</Flex>
				<Spacer flex={1} />
				<Flex align={'center'} gap={2}>
					<Link
						display={{ base: 'none', md: 'block' }}
						pr={3}
						fontWeight={600}
						color={'white'}
						href={'/login'}
						_hover={{
							textDecoration: 'none',
							textShadow: '3px 3px #2364aa',
							transform: 'scale(1.125)',
						}}
						transition={'.3s ease-in-out'}
					>
						Log in
					</Link>
					<Button
						as={'a'}
						display={{ base: 'none', md: 'inline-flex' }}
						p={'.7rem 1.55rem'}
						borderRadius={'4px'}
						fontWeight={600}
						color={'#2364aa'}
						bg={'white'}
						href={'#'}
						_hover={{
							bg: 'brand.250',
						}}
						transition={'.3s ease-in-out'}
					>
						Book now
					</Button>
					<Button
						as={'a'}
						display={{ base: 'inline-flex', md: 'none' }}
						p={'.7rem'}
						borderRadius={'4px'}
						fontWeight={600}
						color={'#2364aa'}
						bg={'white'}
						href={'#'}
						_hover={{
							bg: 'brand.250',
						}}
						transition={'.3s ease-in-out'}
					>
						Book
					</Button>
					<IconButton
						display={{ base: 'block', lg: 'none' }}
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={8} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
						color={'white'}
						_hover={{
							bg: 'none',
						}}
					/>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</>
	);
}
