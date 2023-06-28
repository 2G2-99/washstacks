import { ChevronDownIcon } from '@chakra-ui/icons';
import { Collapse, Flex, Text } from '@chakra-ui/react';

export default function FAQDropdown({
	headerText,
	bodyText,
	isOpen,
	onToggle,
}) {
	return (
		<Flex
			w={'full'}
			p={6}
			bg={isOpen ? 'white.100' : 'white.50'}
			direction={'column'}
			rounded={'md'}
			onClick={onToggle}
			cursor={'pointer'}
		>
			<Flex>
				<ChevronDownIcon
					boxSize={5}
					color={'blue.200'}
					mr={6}
					transform={isOpen ? 'scaleY(-1)' : 'none'}
					transition="transform 0.3s ease-in-out"
				/>
				<Text fontSize={'lg'} fontWeight={'medium'}>
					{headerText}
				</Text>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Text
					w={'full'}
					pt={6}
					pl={12}
					alignSelf={'self-start'}
					color={'grey'}
					bg={'white.100'}
				>
					{bodyText}
				</Text>
			</Collapse>
		</Flex>
	);
}
