import { Button, Flex, Text } from '@chakra-ui/react';

export default function () {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			bg={'white.50'}
			w={'168px'}
			h={'64px'}
			borderBottomLeftRadius={'md'}
			borderBottomRightRadius={'md'}
		>
			<Button
				w={'144px'}
				h={'40px'}
				bg={'blue.200'}
				_hover={{ bg: 'blue.100' }}
			>
				<Text fontWeight={'bold'} color={'white.50'}>
					Book now
				</Text>
			</Button>
		</Flex>
	);
}
