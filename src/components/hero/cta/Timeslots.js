import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { FaBolt } from 'react-icons/fa';
import { TbMoonFilled } from 'react-icons/tb';

import Slot from './Slot';

export default function Timeslots() {
	return (
		<VStack align={'start'}>
			{/* Header */}
			<Flex
				alignItems={'center'}
				direction={'row'}
				wrap={'wrap'}
				mb={'.25rem'}
				fontSize={'.875rem'}
			>
				<Text
					as={'span'}
					color={'brand.850'}
				>
					Schedule your collection in{' '}
					<Text
						as={'span'}
						fontWeight={'bold'}
						color={'brand.800'}
					>
						London
					</Text>
				</Text>
			</Flex>
			{/* Content */}
			<SimpleGrid
				className="slots"
				w={'100%'}
				columns={{ base: 1, md: 2 }}
				spacing={2}
			>
				<Slot
					url={'#'}
					id={'earliest'}
					icon={FaBolt}
					header={'Earliest'}
					timeslot={'In the next 45min'}
				/>
				<Slot
					url={'#'}
					id={'last'}
					icon={TbMoonFilled}
					header={'Last'}
					timeslot={'20:00 - 23:00'}
				/>
				<Box
					className="footer"
					color={'brand.100'}
					fontSize={'.875rem'}
				>
					<Link href={'#'}>See all slots</Link>
				</Box>
			</SimpleGrid>
		</VStack>
	);
}
