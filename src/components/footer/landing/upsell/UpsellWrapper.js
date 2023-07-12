import { Box, Container, Divider, Flex, Heading } from '@chakra-ui/react';
import UpsellCard from './UpsellCard';

export default function OtherContent() {
	return (
		<Box pt={14}>
			<Container
				maxW={{ base: 'container.sm', md: 'container.md', lg: 'container.xl' }}
			>
				<Heading as={'h5'} fontSize={'lg'} textAlign={'left'}>
					Get the most out of WashStacks
				</Heading>
				<Flex direction={{ base: 'column', md: 'row' }} gap={6}>
					<UpsellCard
						image={'/img/couple.jpg'}
						buttonText={'Send a gift card'}
						footerText={
							'Satisfied with our service? Send a gift card to someone you love.'
						}
					/>
					<UpsellCard
						image={'/img/refer-couple.jpg'}
						buttonText={'Refer a friend and earn'}
						footerText={'Want to get a discount code? Refer friends and earn.'}
					/>
				</Flex>
				<Divider borderColor={'grey'} my={12} />
			</Container>
		</Box>
	);
}
