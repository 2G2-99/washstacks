import { Box, Flex, Show, Text, VStack } from '@chakra-ui/react';
import AppIcon from '../../../assets/svg/brand/app_icon.svg';
import AppStoreBadge from '../../../assets/svg/app-store-black.svg';
import PlayStoreBadge from '../../../assets/svg/google-play-black.svg';
import QRCode from '../../../assets/svg/brand/qr-code.svg';

export default function () {
	return (
		<Box width={{ base: 'full', md: 'sm', lg: 'md' }}>
			<Flex bg={'blue.50'} rounded={'md'} p={4}>
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
					<Box p={0.5} bgColor={'white'} rounded={'md'}>
						<QRCode />
					</Box>
				</Show>
			</Flex>
		</Box>
	);
}
