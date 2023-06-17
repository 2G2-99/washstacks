import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import BannerButton from './BannerButton';

export default function Banner() {
	return (
		<Box
			w={'full'}
			color={'blue.400'}
			bg={'yellow.100'}
			py={{ base: 8, md: 12 }}
		>
			<Center>
				<VStack>
					<Text
						fontSize={'2xl'}
						fontWeight={'bold'}
						textAlign={'center'}
						mb={4}
					>
						Book now. Smile away. Everyday.
					</Text>
					<BannerButton />
				</VStack>
			</Center>
		</Box>
	);
}
