import { Link } from '@chakra-ui/next-js';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { PiChatCircleDotsDuotone } from 'react-icons/pi';

export default function ChatButton() {
	return (
		<Link
			href={'#'}
			display={'inline-block'}
			bg={'white'}
			border={'1px'}
			borderColor={'grey.50'}
			borderRadius={'full'}
			p={1.5}
			_hover={{ textDecor: 'none' }}
		>
			<HStack spacing={1}>
				<Icon as={PiChatCircleDotsDuotone} boxSize={7} color={'blue.300'} />
				<Text color={'blue.400'} fontSize={'sm'} fontWeight={'extrabold'}>
					Chat with us
				</Text>
			</HStack>
		</Link>
	);
}
