import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { RiLeafFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { MdWaterDrop } from 'react-icons/md';

export default function AboutUs() {
	return (
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
							<AboutUsFact icon={TiTick} text={'Trustworthy local cleaners'} />
						</VStack>
						<Button w={'7.5rem'} h={12} fontWeight={'bold'}>
							About us
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Box>
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
