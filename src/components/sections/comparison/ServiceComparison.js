import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Services from './services';

export default function ServiceComparison() {
	return (
		<VStack bg={'blue.400'} pt={'5.625rem'} pb={'2rem'}>
			<Container id={'service-comparison_heading'} width={'full'} mb={'4rem'}>
				<Heading as={'h2'} textAlign={'center'} color={'white.50'}>
					<Text as={'span'} color={'yellow.100'}>
						Compare{' '}
					</Text>
					our services
				</Heading>
			</Container>
			<Center id={'service-comparison_content'} maxW={'100%'}>
				<Services />
			</Center>
			<Text pt={'2.5rem'} pb={'.5rem'} color={'#c5c9e5'}>
				Our minimum order value is £20.
			</Text>
			<Text color={'#c5c9e5'}>*In most locations.</Text>
		</VStack>
	);
}
