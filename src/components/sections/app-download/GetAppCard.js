import { Box, Flex, Show, Text, VStack } from '@chakra-ui/react';
import AppIcon from '../../../assets/svg/brand/app_icon.svg';
import AppStoreBadge from '../../../assets/svg/app-store-black.svg';
import PlayStoreBadge from '../../../assets/svg/google-play-black.svg';
import QRCode from '../../../assets/svg/brand/qr-code.svg';

export default function () {
	return (
		<Flex
			w={{ base: 'full', md: '372.66px' }}
			h={{ base: '123.29', md: '192px' }}
			bg={'blue.50'}
			p={4}
			rounded={'md'}
		>
			<Flex flex={2} align={'flex-start'} direction={'column'} gap={4}>
				<Flex align={'center'} justify={'flex-start'} gap={2}>
					<AppIcon />
					<Text fontSize={'lg'} fontWeight={'bold'} color={'blue.400'}>
						Get the app
					</Text>
				</Flex>
				<Flex align={'flex-start'} direction={{ md: 'column' }} gap={2}>
					<AppStoreBadge />
					<PlayStoreBadge />
				</Flex>
			</Flex>
			<Show above="md">
				<QRCode />
			</Show>
		</Flex>
	);
}
