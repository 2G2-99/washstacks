import {
	AspectRatio,
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import Logo from '../../../assets/svg/brand/logo-single/all_black-single.svg';
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
						<Box px={3} mb={{ base: 10, md: 0 }} alignSelf={'center'}>
							<Image
								src="/img/delivery-truck.jpg"
								alt="naruto"
								fill
								loading="lazy"
								placeholder="blur"
								rounded={'xl'}
							/>
						</Box>
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
