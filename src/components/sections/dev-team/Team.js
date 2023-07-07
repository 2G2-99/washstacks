import { Image } from '@chakra-ui/next-js';
import {
	Box,
	Container,
	Heading,
	Hide,
	Icon,
	Show,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import { BsFillChatQuoteFill } from 'react-icons/bs';

export default function Team() {
	return (
		<Box w="full" py={40} color={'white.50'} bg="blue.400">
			<Container>
				<VStack>
					<Icon as={BsFillChatQuoteFill} boxSize={8} mb={4} />
					<Heading as="h5">Meet the team</Heading>
					<Text>
						We're a global team of laundry, tech, and logistics experts on a
						mission to free people from laundry so that they can spend more time
						doing what they love
					</Text>
					<Text fontWeight={'bold'}>TEAM WASHSTACKS</Text>
					<Spacer p={6} />
					<Show below="md">
						<Image
							src={'/img/washstacks-team.png'}
							width={240}
							height={260}
							alt="WashStacks Team"
						/>
					</Show>
					<Hide below="md">
						<Image
							src={'/img/washstacks-team.png'}
							alt="WashStacks Team"
							width={480}
							height={520}
						/>
					</Hide>
				</VStack>
			</Container>
		</Box>
	);
}
