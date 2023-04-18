import {
	Flex,
	Text,
	VStack,
	useBreakpointValue,
	Heading,
	HStack,
	Container,
	Box,
	Icon,
	SimpleGrid,
} from '@chakra-ui/react';
import { FaBolt } from 'react-icons/fa';
import { TbMoonFilled } from 'react-icons/tb';
import { BiChevronRight } from 'react-icons/bi';
import { HiChevronRight } from 'react-icons/hi';
import { Link } from '@chakra-ui/next-js';

export default function Hero() {
	return (
		<Flex
			id="hero"
			w={'full'}
			h={'100vh'}
			backgroundColor={'brand.100'}
			pt={useBreakpointValue({ base: '4.5em' })}
		>
			<VStack w={'full'}>
				<Container centerContent mt={'2em'}>
					<Heading
						as={'h1'}
						mb={'1em'}
						color={'brand.900'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '2.625rem', md: '4.5rem' })}
					>
						Laundry & dry cleaning with 24h delivery in
						<Text color={'brand.400'}>London</Text>
					</Heading>
				</Container>
				<Container
					maxW={useBreakpointValue({ base: 'full' })}
					backgroundColor={'white'}
					py={'1.75em'}
				>
					<VStack align={'start'}>
						<Flex
							alignItems={'center'}
							direction={'row'}
							wrap={'wrap'}
							mb={'.9rem'}
						>
							<Text as={'span'} fontWeight={'thin'}>
								Schedule your collection in{' '}
								<Text as={'span'} fontWeight={'bold'}>
									London
								</Text>
							</Text>
						</Flex>
						<SimpleGrid
							className="slots"
							w={'100%'}
							minChildWidth={'100%'}
							spacing={2}
						>
							<Link
								href={'#'}
								borderWidth={'1px'}
								borderColor={'brand.200'}
								borderRadius={'md'}
								_hover={{
									textDecoration: 'none',
									backgroundColor: 'brand.250',
									borderColor: 'brand.250',
								}}
							>
								<Flex
									id="earliest"
									className="slot"
									direction={'row'}
									align={'center'}
									justify={'space-between'}
									py={'.5rem'}
									px={'1rem'}
								>
									<Box
										className="slot-content"
										w={'100%'}
										color={'brand.800'}
										fontWeight={'bold'}
									>
										<Box className="slot-header" textTransform={'uppercase'}>
											<Icon as={FaBolt} mr={'.5rem'} />
											<Text as={'span'}>Earliest</Text>
										</Box>
										<Box className="slot-timeslot">
											<Text>In the next 45min</Text>
										</Box>
									</Box>
									<Icon as={HiChevronRight} />
								</Flex>
							</Link>
							<Link
								href={'#'}
								borderWidth={'1px'}
								borderColor={'brand.200'}
								borderRadius={'md'}
								_hover={{
									textDecoration: 'none',
									backgroundColor: 'brand.250',
									borderColor: 'brand.250',
								}}
							>
								<Flex
									id="last"
									className="slot"
									direction={'row'}
									align={'center'}
									justify={'space-between'}
									py={'.5rem'}
									px={'1rem'}
								>
									<Box
										className="slot-content"
										w={'100%'}
										color={'brand.800'}
										fontWeight={'bold'}
									>
										<Box className="slot-header" textTransform={'uppercase'}>
											<Icon as={TbMoonFilled} mr={'.5rem'} />
											<Text as={'span'}>Last</Text>
										</Box>
										<Box className="slot-timeslot">
											<Text>20:00 - 23:00</Text>
										</Box>
									</Box>
									<Icon as={HiChevronRight} />
								</Flex>
							</Link>
							<Box className="footer">
								<Link href={'#'}>See all slots</Link>
							</Box>
						</SimpleGrid>
					</VStack>
				</Container>
			</VStack>
		</Flex>
	);
}
