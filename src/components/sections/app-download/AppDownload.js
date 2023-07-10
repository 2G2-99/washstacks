import BenefitsIconItem from '@/components/BenefitsIconItem';
import { Box, Container, Flex, Image, Heading } from '@chakra-ui/react';
import { FaCreditCard, FaDoorOpen } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

import GetAppCard from './GetAppCard';

export default function () {
	return (
		<Box py={20} bg={'white.100'}>
			<Container maxW={'container.xl'}>
				<Flex
					gap={{ base: 10, md: 0 }}
					mb={10}
					direction={{ base: 'column', md: 'row' }}
					justify={'center'}
					align={'center'}
				>
					<Box px={3} flex={1}>
						<Heading as={'h3'} fontSize={'40px'} fontWeight={'black'} mb={8}>
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
					<Flex flex={1} justify={'flex-end'}>
						<Container mr={0}>
							<Image
								src={'/img/washstacks-app.png'}
								minW={72}
								minH={64}
								alt="Screenshot of the WashStacks app form"
							/>
						</Container>
					</Flex>
				</Flex>
				<Flex justify={'flex-start'} align={'center'}>
					<GetAppCard />
				</Flex>
			</Container>
		</Box>
	);
}
