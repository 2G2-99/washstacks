import { Link } from '@chakra-ui/next-js';
import { FaTruck, FaCalendarCheck } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

import { Container, Heading, Flex, Divider } from '@chakra-ui/react';
import Content from './Content';
import BenefitsIconItem from '@/components/BenefitsIconItem';
import ChatButton from '@/components/ChatButton';

export default function Benefits({}) {
	return (
		<Container
			id="benefits"
			maxW={{ base: 'container.sm', lg: 'container.lg', xl: 'container.xl' }}
			py={20}
		>
			<Container
				id="benefits-header"
				maxW={{ base: '60ch', lg: 'container.lg', xl: 'container.xl' }}
				centerContent
			>
				<Heading
					id="benefits-statement"
					as={'h2'}
					mb={10}
					fontSize={'5xl'}
					px={3}
					textAlign={'center'}
				>
					We collect, clean, and deliver your laundry and dry cleaning.
				</Heading>
				<Flex
					id="benefits-facts"
					gap={4}
					mb={20}
					flexFlow={{ base: 'column', sm: 'row' }}
					align={{ base: 'start', sm: 'center' }}
					justify={'center'}
				>
					<BenefitsIconItem text={'24'} benefit={'24h turnaround time'} />
					<BenefitsIconItem
						icon={FaTruck}
						benefit={'Free collection and delivery'}
					/>
					<BenefitsIconItem
						icon={IoChatbubbleEllipsesOutline}
						benefit={'Dedicated 24/7 support'}
					/>
				</Flex>
			</Container>

			<Content
				direction={{ base: 'column-reverse', md: 'row' }}
				image="https://prod-cdn.laundryheap.com/assets/landing/benefits/1_2x-c4578394b25c49969b482be2aae2925ae0e07f475bbfeb5eac48c581a2f4a21f.jpg"
				fallbackImage={'/img/laundry_service.jpg'}
				marginOnLeft={{ md: 20 }}
				catchphrase={'freedom from laundry'}
				benefitTitle={'A laundry service designed for you'}
				benefitText={
					'Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle.'
				}
			>
				<Link
					href={'#'}
					color={'blue.200'}
					fontWeight={'extrabold'}
					_hover={{ textDecoration: 'none' }}
				>
					See how it works
				</Link>
			</Content>
			<Divider orientation="horizontal" my={20} borderColor={'grey'} />
			<Content
				direction={{ base: 'column-reverse', md: 'row-reverse' }}
				image={
					'https://prod-cdn.laundryheap.com/assets/landing/benefits/2_2x-525b9e1898bb7bbbdf329aead2f52721a74611f01cd6181b32365c9f69a12237.jpg'
				}
				fallbackImage={'/img/delivery_notification.jpg'}
				marginOnRight={{ md: 16 }}
				catchphrase={'24h turnaround time'}
				benefitTitle={'No need to plan in advance'}
			>
				<BenefitsIconItem
					icon={FaCalendarCheck}
					benefit={'Schedule a collection today'}
					marginBottom={4}
				/>
				<BenefitsIconItem
					text={24}
					benefit={'Get your laundry back in 24h'}
					marginBottom={4}
				/>
			</Content>
			<Divider orientation="horizontal" my={20} borderColor={'grey'} />
			<Content
				direction={{ base: 'column-reverse', md: 'row' }}
				image={
					'https://prod-cdn.laundryheap.com/assets/landing/benefits/3_2x-a9366ba37c73900bc19f0a9a411b8a122e6ac07ba3534fcebb9770060b5ee2e5.jpg'
				}
				fallbackImage={'/img/support_chat.jpg'}
				marginOnLeft={{ md: 16 }}
				catchphrase={'24/7 customer support'}
				benefitTitle={"We're here for you"}
				benefitText={
					'Any change in delivery times or date, or if something goes wrong, we are here. Our online customer support team will assist you day and night.'
				}
			>
				<Container p={0}>
					<ChatButton />
				</Container>
			</Content>
		</Container>
	);
}
