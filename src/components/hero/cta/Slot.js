import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

const Slot = ({ url, id, icon, timeslot }) => {
	return (
		<Link
			href={url}
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
				id={id}
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
						<Icon as={icon} mr={'.5rem'} />
						<Text as={'span'}>Earliest</Text>
					</Box>
					<Box className="slot-timeslot">
						<Text>{timeslot}</Text>
					</Box>
				</Box>
				<Icon as={HiChevronRight} />
			</Flex>
		</Link>
	);
};

export default Slot;
