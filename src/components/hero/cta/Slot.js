import { Link } from '@chakra-ui/next-js';
import {
	Box,
	Center,
	Flex,
	Icon,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

export default function Slot({ url, id, icon, header, timeslot }) {
	return (
		<Link
			role="group"
			href={url}
			borderWidth={'1px'}
			borderColor={'blue.100'}
			borderRadius={'.25rem'}
			_hover={{
				textDecoration: 'none',
				backgroundColor: 'blue.50',
				borderColor: 'blue.50',
			}}
		>
			<Flex
				id={id}
				className="slot"
				direction={'row'}
				align={'center'}
				justify={'space-between'}
				py={'.3rem'}
				px={'1rem'}
			>
				<Box
					className="slot-content"
					w={'100%'}
					fontWeight={'bold'}
					// letterSpacing={'wider'}
				>
					<Flex
						className="slot-header"
						textTransform={'uppercase'}
						fontSize={'.75rem'}
						color={'grey'}
						_groupHover={{ color: 'blue.300' }}
					>
						<Center mr={'.25rem'}>
							<Icon as={icon} />
						</Center>
						<Text as={'span'}>{header}</Text>
					</Flex>
					<Flex
						fontSize={useBreakpointValue({ base: '.875rem' })}
						className="slot-timeslot"
						lineHeight={'1.125rem'}
						direction={'row'}
						wrap
					>
						<Text>{timeslot}</Text>
					</Flex>
				</Box>
				<Icon as={HiChevronRight} color={'blue.300'} />
			</Flex>
		</Link>
	);
}
