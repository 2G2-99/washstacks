import { Link } from '@chakra-ui/next-js';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { PiChatCircleDotsDuotone } from 'react-icons/pi';

export default function ChatButton() {
	return (
		<Link
			display={'inline-block'}
			href={'#'}
			bg={'white'}
			border={'1px'}
			borderColor={'grey.50'}
			borderRadius={'full'}
			p={1.5}
			_hover={{ textDecor: 'none' }}
		>
			<HStack spacing={1}>
				<Icon as={PiChatCircleDotsDuotone} boxSize={7} color={'blue.300'} />
				<Text color={'blue.300'} fontSize={'xs'} fontWeight={'bold'}>
					Chat with us
				</Text>
			</HStack>
		</Link>
	);
}
