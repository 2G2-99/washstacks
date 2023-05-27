import { Center, Circle, Icon, Text } from '@chakra-ui/react';

export function Fact({ icon, children = null, text }) {
	return (
		<Center>
			<Circle w={'40px'} h={'40px'} mr={'1rem'} bg={'yellow.100'}>
				{children !== null ? (
					children
				) : (
					<Icon as={icon} display={'block'} boxSize={6} />
				)}
			</Circle>
			<Text fontWeight={'bold'}>{text}</Text>
		</Center>
	);
}
