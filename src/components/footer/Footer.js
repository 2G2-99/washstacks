import {
	Box,
	Container,
	Stack,
	SimpleGrid,
	Text,
	Link,
	VisuallyHidden,
	chakra,
	useColorModeValue,
	Flex,
	Divider,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import AppStoreBadge from '../../assets/svg/app-store-black.svg';
import PlayStoreBadge from '../../assets/svg/google-play-black.svg';
import Logo from '../../assets/svg/brand/logo/logo.svg';
import LinksTree from './landing/links/LinksTree';
import Upsell from './landing/upsell/UpsellWrapper';
import Locations from './landing/locations/LocationsWrapper';

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer({ home = false }) {
	return (
		<Box>
			<Container
				maxW={{ base: '60ch', md: 'container.md', lg: 'container.xl' }}
				py={14}
			>
				<Box pb={10}>
					<Upsell />
				</Box>
				<Divider borderColor={'grey'} />
				<Box pt={10}>
					<LinksTree />
				</Box>
			</Container>
			<Box py={14} bgColor={'white.100'}>
				<Container
					maxW={{ base: '60ch', md: 'container.md', lg: 'container.xl' }}
				>
					<Locations />
				</Container>
			</Box>

			{/* <Box py={10}>
				<Flex
					align={'center'}
					_before={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: 'gray.800',
						flexGrow: 1,
						mr: 8,
					}}
					_after={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: 'gray.800',
						flexGrow: 1,
						ml: 8,
					}}
				>
					<Logo />
				</Flex>
				<Box
					bg={useColorModeValue('gray.50', 'gray.900')}
					color={useColorModeValue('gray.700', 'gray.200')}
				>
					<Container
						as={Stack}
						maxW={'6xl'}
						py={4}
						direction={{ base: 'column', md: 'row' }}
						spacing={4}
						justify={{ base: 'center', md: 'space-between' }}
						align={{ base: 'center', md: 'center' }}
					>
						<Text>© 2022 Chakra Templates. All rights reserved</Text>
						<Stack direction={'row'} spacing={6}>
							<SocialButton label={'Twitter'} href={'#'}>
								<FaTwitter />
							</SocialButton>
							<SocialButton label={'YouTube'} href={'#'}>
								<FaYoutube />
							</SocialButton>
							<SocialButton label={'Instagram'} href={'#'}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Container>
				</Box>
			</Box> */}
		</Box>
	);
}
