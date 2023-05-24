import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import ServicesTable from './services';

export default function ServiceComparison() {
	return (
		<VStack bg={'blue.400'}>
			<Container id={'service-comparison_heading'} width={'full'}>
				<Heading as={'h2'} textAlign={'center'} color={'white'}>
					<Text as={'span'} color={'yellow.100'}>
						Compare{' '}
					</Text>
					our services
				</Heading>
			</Container>
			<Box id={'service-comparison_content'} width={'full'}>
				<ServicesTable />
			</Box>
		</VStack>
	);
}
