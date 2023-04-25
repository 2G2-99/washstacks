import {
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Link,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../../assets/svg/brand/Logo.svg';
import Logo_v1 from '../../assets/svg/brand/v1.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

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
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })}>
						<Link href={'/'}>{brandLogo}</Link>
					</Text>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={'flex-end'}
					direction={'row'}
					spacing={6}
				>
					<Button
						as={'a'}
						fontSize={'sm'}
						fontWeight={400}
						variant={'link'}
						href={'/login'}
					>
						Log in
					</Button>
					<Button
						as={'a'}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg={'pink.400'}
						href={'#'}
						_hover={{
							bg: 'pink.300',
						}}
					>
						Book now
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</>
	);
}
