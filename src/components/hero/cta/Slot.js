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
			borderColor={'brand.200'}
			borderRadius={'.25rem'}
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
						color={'brand.850'}
						_groupHover={{ color: 'brand.100' }}
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
				<Icon as={HiChevronRight} color={'brand.100'} />
			</Flex>
		</Link>
	);
}
