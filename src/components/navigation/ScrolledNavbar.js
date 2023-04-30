import {
	Flex,
	IconButton,
	Button,
	Collapse,
	useDisclosure,
	Spacer,
	Box,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo_v1 from '../../assets/svg/brand/v1.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from '@chakra-ui/next-js';

export default function ScrolledNavbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Flex
				className="scrolled--navbar"
				as={'nav'}
				minH={'60px'}
				py={{ base: '1.5rem', md: '2rem' }}
				px={{ base: '1rem', md: '2.25rem' }}
				align={'center'}
				background={'brand.900'}
				boxShadow={'xl'}
			>
				<Box mr={{ lg: '10' }}>
					<Link href={'/'}>
						<Logo_v1 />
					</Link>
				</Box>
				<Flex display={{ base: 'none', lg: 'block' }}>
					<DesktopNav color={'brand.800'} />
				</Flex>
				<Spacer flex={1} />
				<Flex align={'center'} gap={2}>
					<Link
						display={{ base: 'none', md: 'block' }}
						pr={3}
						fontWeight={600}
						color={'brand.800'}
						href={'/login'}
						_hover={{
							textDecoration: 'none',
							textShadow: '2.5px 2.5px #d5d5d5',
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
						color={'brand.900'}
						bg={'brand.150'}
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
						color={'brand.900'}
						bg={'brand.150'}
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
						color={'brand.900'}
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
