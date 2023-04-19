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
import Logo from '../../assets/svg/logoipsum-245.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

const Navbar = () => {
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

	const bgColor = scrollPosition === 0 ? 'white' : 'transparent';
	const boxShadow = scrollPosition === 0 ? 'none' : 'xl';

	return (
		<>
			<Flex
				as={'nav'}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
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
						<Link href={'/'}>
							<Logo />
							{/* <Text>WashStacks</Text> */}
						</Link>
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
};

export default Navbar;
