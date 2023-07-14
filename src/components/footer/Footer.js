import {
	Box,
	Container,
	Stack,
	Text,
	VisuallyHidden,
	Flex,
	Divider,
	Icon,
	Show,
	Hide,
} from '@chakra-ui/react';
import {
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaFacebookF,
} from 'react-icons/fa';

import AppStoreBadge from '../../assets/svg/app-store-black.svg';
import PlayStoreBadge from '../../assets/svg/google-play-black.svg';
import Logo from '../../assets/svg/brand/logo/v1.svg';
import LinksTree from './landing/links/LinksTree';
import Upsell from './landing/upsell/UpsellWrapper';
import Locations from './landing/locations/LocationsWrapper';
import { Link } from '@chakra-ui/next-js';

const SocialButton = ({ icon, label, href }) => {
	return (
		<Link
			bgColor={'grey.100'}
			rounded={'full'}
			p={1}
			cursor={'pointer'}
			href={href}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			<Icon as={icon} display={'block'} color={'white'} boxSize={5} p={0.5} />
		</Link>
	);
};

const Block = ({ stackDirection, heading, children }) => {
	return (
		<Box flex={1}>
			<Stack align={'start'} direction={stackDirection}>
				<Text
					color={'grey.50'}
					textAlign={'left'}
					fontSize={'xs'}
					fontWeight={'bold'}
				>
					{heading}
				</Text>
				<Flex direction={'row'} justify={'start'} width={'full'} gap={2.5}>
					{children}
				</Flex>
			</Stack>
			<Hide above="lg">
				<Divider my={8} borderColor={'grey.50'} />
			</Hide>
		</Box>
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
				<Divider borderColor={'grey.50'} />
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

			<Container
				maxW={{ base: '60ch', md: 'container.md', lg: 'container.xl' }}
				py={10}
			>
				<Stack direction={{ base: 'column', lg: 'row' }}>
					<Block heading={'Powered by'}>
						{<Icon as={Logo} display={'block'} boxSize={'max-content'} />}
					</Block>
					<Block heading={'Download our mobile app'}>
						<AppStoreBadge />
						<PlayStoreBadge />
					</Block>
					<Block heading={'Follow us'}>
						<SocialButton icon={FaFacebookF} label={'Facebook'} href={'#'} />
						<SocialButton icon={FaTwitter} label={'Twitter'} href={'#'} />
						<SocialButton icon={FaInstagram} label={'Instagram'} href={'#'} />
						<SocialButton icon={FaLinkedinIn} label={'LinkedIn'} href={'#'} />
					</Block>
				</Stack>

				<Show above="lg">
					<Divider borderColor={'grey.50'} my={8} />
				</Show>

				<Text color={'grey.50'} fontSize={'sm'} textAlign={'center'}>
					All rights reserved. © WashStacks 2023.
				</Text>
			</Container>
		</Box>
	);
}
