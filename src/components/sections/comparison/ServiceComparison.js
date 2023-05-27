import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Services from './Services';

export default function ServiceComparison() {
	return (
		<VStack bg={'blue.400'} pt={'5.625rem'}>
			<Container id={'service-comparison_heading'} width={'full'} mb={'4rem'}>
				<Heading as={'h2'} textAlign={'center'} color={'white'}>
					<Text as={'span'} color={'yellow.100'}>
						Compare{' '}
					</Text>
					our services
				</Heading>
			</Container>
			<Center id={'service-comparison_content'} maxW={'100%'}>
				<Services />
			</Center>
		</VStack>
	);
}
