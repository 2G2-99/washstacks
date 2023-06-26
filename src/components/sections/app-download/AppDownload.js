import BenefitsIconItem from '@/components/BenefitsIconItem';
import { Box, Container, Flex, HStack, Heading } from '@chakra-ui/react';
import { FaCreditCard, FaDoorOpen } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { Image } from '@chakra-ui/next-js';
import GetAppCard from './GetAppCard';

export default function () {
	return (
		<Box py={20}>
			<Container maxW={'container.lg'}>
				<Flex
					mb={10}
					direction={{ base: 'column', md: 'row' }}
					justify={'center'}
					align={'center'}
				>
					<Box px={3} flex={1}>
						<Heading as={'h3'} mb={8}>
							Your Laundry and Dry cleaning solution just a click away
						</Heading>
						<Box>
							<BenefitsIconItem
								icon={FaCreditCard}
								benefit={'Cashless Payments'}
								fontSize={'lg'}
							/>
							<BenefitsIconItem
								icon={FaDoorOpen}
								benefit={'Contactless collection and delivery'}
								fontSize={'lg'}
							/>
							<BenefitsIconItem
								icon={BsClockHistory}
								benefit={'Real-time order updates'}
								fontSize={'lg'}
							/>
							<BenefitsIconItem
								icon={IoChatbubbleEllipsesOutline}
								benefit={'Dedicated 24/7 support'}
								fontSize={'lg'}
							/>
						</Box>
					</Box>
					<Box w={'23.3rem'} h={'17.15rem'} flex={1}>
						<Image
							src={'/img/washstacks-app.png'}
							width={373}
							height={275}
							alt="Screenshot of the WashStacks app form"
						/>
					</Box>
				</Flex>
				<Flex justify={'flex-start'} align={'center'}>
					<GetAppCard />
				</Flex>
			</Container>
		</Box>
	);
}
