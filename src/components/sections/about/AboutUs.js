import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Hide,
	Icon,
	Show,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { RiLeafFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { MdWaterDrop } from 'react-icons/md';
import Banner from '@/components/upsell-banner/Banner';

export default function AboutUs() {
	return (
		<>
			<Box w="full" py={40} color={'blue.400'} bg="turquoise.100">
				<Container maxW={{ base: 'full', md: 'container.lg' }}>
					<Flex direction={{ base: 'column', md: 'row' }}>
						<Image
							src="/img/delivery-truck.jpg"
							alt="delivery "
							width={294}
							height={294}
							loading="lazy"
							placeholder="blur"
							rounded={'xl'}
							mb={{ base: 10, md: 0 }}
							alignSelf={'center'}
						/>
						<Flex direction={'column'} ml={{ md: 20 }} px={3} justify={'start'}>
							<Heading as={'h3'} fontSize={'4xl'} mb={10}>
								Reinventing the future of laundry and dry cleaning.
							</Heading>
							<VStack align={'start'} mb={10}>
								<AboutUsFact
									icon={RiLeafFill}
									text={'Zero-emission delivery vehicles'}
								/>
								<AboutUsFact icon={MdWaterDrop} text={'Efficient water use'} />
								<AboutUsFact
									icon={TiTick}
									text={'Trustworthy local cleaners'}
								/>
							</VStack>
							<Button w={'7.5rem'} h={12} fontWeight={'bold'}>
								About us
							</Button>
						</Flex>
					</Flex>
				</Container>
			</Box>
			<Banner />
			<Box w="full" py={40} color={'white.50'} bg="blue.400">
				<Container>
					<VStack>
						<Icon as={BsFillChatQuoteFill} boxSize={8} mb={4} />
						<Heading as="h5">Meet the team</Heading>
						<text>
							We're a global team of laundry, tech, and logistics experts on a
							mission to free people from laundry so that they can spend more
							time doing what they love
						</text>
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
		</>
	);
}

function AboutUsFact({ icon, text }) {
	return (
		<Flex direction={'row'}>
			<Icon as={icon} boxSize={6} mr={2} />
			<Text fontWeight={'bold'} fontSize={'lg'}>
				{text}
			</Text>
		</Flex>
	);
}
