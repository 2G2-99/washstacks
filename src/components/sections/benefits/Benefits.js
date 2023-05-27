import { Link } from '@chakra-ui/next-js';
import { FaTruck, FaCalendarCheck } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

import {
	Container,
	Heading,
	Flex,
	Text,
	Icon,
	Divider,
	Image,
	Circle,
	Box,
	Center,
	HStack,
} from '@chakra-ui/react';
import Content from './Content';
import { Fact } from './Fact';

export default function Benefits({}) {
	return (
		<Container
			id="benefits"
			maxW={{ base: 'container.sm', lg: 'container.md', xl: 'container.lg' }}
			px={{ lg: '1rem' }}
			py={'5rem'}
		>
			<Container id="benefits-header">
				<Center mb={'2.5rem'}>
					<Heading
						id="benefits-statement"
						as={'h2'}
						px={'.75rem'}
						textAlign={'center'}
					>
						We collect, clean, and deliver your laundry and dry cleaning.
					</Heading>
				</Center>
				<Flex id="benefits-facts" gap={'1rem'} mb={'5rem'}>
					<Fact text={'24h turnaround time'}>
						<Circle w={'22.5px'} h={'22.5px'} bg={'black'}>
							<Text color={'white'} fontSize={'.9rem'} fontWeight={'bold'}>
								24
							</Text>
						</Circle>
					</Fact>
					<Fact icon={FaTruck} text={'Free collection and delivery'} />
					<Fact
						icon={IoChatbubbleEllipsesOutline}
						text={'Dedicated 24/7 support'}
					/>
				</Flex>
			</Container>

			<Content
				direction={{ base: 'column-reverse', md: 'row' }}
				image="https://prod-cdn.laundryheap.com/assets/landing/benefits/1_2x-c4578394b25c49969b482be2aae2925ae0e07f475bbfeb5eac48c581a2f4a21f.jpg"
				fallbackImage={'/img/laundry_service.jpg'}
				marginOnLeft={{ md: '3.75rem' }}
				catchphrase={'freedom from laundry'}
				benefitTitle={'A laundry service designed for you'}
				benefitText={
					'Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle.'
				}
			>
				<Link href={'#'}>See how it works</Link>
			</Content>
			<Divider orientation="horizontal" my={'5rem'} borderColor={'grey'} />
			<Content
				direction={{ base: 'column-reverse', md: 'row-reverse' }}
				image={
					'https://prod-cdn.laundryheap.com/assets/landing/benefits/2_2x-525b9e1898bb7bbbdf329aead2f52721a74611f01cd6181b32365c9f69a12237.jpg'
				}
				fallbackImage={'/img/delivery_notification.jpg'}
				marginOnRight={{ md: '3.75rem' }}
				catchphrase={'24h turnaround time'}
				benefitTitle={'No need to plan in advance'}
			>
				<Flex mb={'.5rem'} align={'center'}>
					<Circle w={'40px'} h={'40px'} bg={'yellow.100'} mr={'.5rem'}>
						<Icon as={FaCalendarCheck} display={'block'} />
					</Circle>
					<Text fontWeight={'bold'}>Schedule a collection today</Text>
				</Flex>
				<Flex mb={'.5rem'} align={'center'}>
					<Circle w={'40px'} h={'40px'} bg={'yellow.100'} mr={'.5rem'}>
						<Circle w={'22.5px'} h={'22.5px'} bg={'black'}>
							<Text color={'white'} fontSize={'.9rem'} fontWeight={'bold'}>
								24
							</Text>
						</Circle>
					</Circle>
					<Text fontWeight={'bold'}>Get your laundry back in 24h</Text>
				</Flex>
			</Content>
			<Divider orientation="horizontal" my={'5rem'} borderColor={'grey'} />
			<Content
				direction={{ base: 'column-reverse', md: 'row' }}
				image={
					'https://prod-cdn.laundryheap.com/assets/landing/benefits/3_2x-a9366ba37c73900bc19f0a9a411b8a122e6ac07ba3534fcebb9770060b5ee2e5.jpg'
				}
				fallbackImage={'/img/support_chat.jpg'}
				marginOnLeft={{ md: '3.75rem' }}
				catchphrase={'24/7 customer support'}
				benefitTitle={"We're here for you"}
				benefitText={
					'Any change in delivery times or date, or if something goes wrong, we are here. Our online customer support team will assist you day and night.'
				}
			>
				<Link
					display={'inline-block'}
					href={'#'}
					bg={'blue.50'}
					borderRadius={'full'}
					p={'.5rem'}
					_hover={{ textDecor: 'none' }}
				>
					<HStack spacing={1}>
						<Icon
							as={IoChatbubbleEllipsesOutline}
							boxSize={7}
							color={'blue.300'}
						/>
						<Text color={'blue.300'}>Chat with us</Text>
					</HStack>
				</Link>
			</Content>
		</Container>
	);
}
