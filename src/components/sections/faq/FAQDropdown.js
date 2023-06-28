import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, useDisclosure } from '@chakra-ui/react';

export default function FAQDropdown({
	headerText,
	bodyText,
	isOpen,
	onToggle,
}) {
	return (
		<>
			<Flex
				onClick={onToggle}
				w={'full'}
				p={6}
				bg={isOpen ? 'white.100' : 'white.50'}
				roundedTop={'md'}
			>
				<ChevronDownIcon boxSize={5} color={'blue.200'} mr={6} />
				<Text fontSize={'lg'}>{headerText}</Text>
			</Flex>
			{isOpen && (
				<Text
					w={'full'}
					pr={6}
					pb={6}
					pl={16}
					alignSelf={'self-start'}
					color={'grey'}
					bg={'white.100'}
					roundedBottom={'md'}
				>
					{bodyText}
				</Text>
			)}
		</>
	);
}
