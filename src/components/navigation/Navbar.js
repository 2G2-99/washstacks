import {
	Flex,
	IconButton,
	Button,
	Collapse,
	useBreakpointValue,
	useDisclosure,
	Spacer,
	Box,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../../assets/svg/brand/logo.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from '@chakra-ui/next-js';

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Flex
				className={'navbar'}
				as={'nav'}
				minH={'60px'}
				py={{ base: '1.5rem', md: '2rem' }}
				px={{ base: '1rem', md: '2.25rem' }}
				align={'center'}
				background={'blue.200'}
			>
				<Box mr={{ lg: '10' }}>
					<Link href={'/'}>
						<Logo />
					</Link>
				</Box>
				<Flex display={{ base: 'none', lg: 'block' }}>
					<DesktopNav color={'brand.white'} />
				</Flex>
				<Spacer flex={1} />
				<Flex
					align={'center'}
					gap={2}
				>
					<Link
						display={{ base: 'none', md: 'block' }}
						pr={3}
						fontWeight={600}
						color={'brand.white'}
						href={'/login'}
						_hover={{
							textDecoration: 'none',
							textShadow: '2.5px 2.5px #2364aa',
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
						bg={'brand.white'}
						href={'#'}
						_hover={{
							bg: 'blue.50',
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
						bg={'brand.white'}
						href={'#'}
						_hover={{
							bg: 'blue.50',
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
						color={'brand.white'}
						_hover={{
							bg: 'none',
						}}
					/>
				</Flex>
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
			>
				<MobileNav />
			</Collapse>
		</>
	);
}
