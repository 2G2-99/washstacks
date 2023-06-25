import { Circle, Flex, Icon, Text } from '@chakra-ui/react';

export default function BenefitsIconItem({
	icon,
	text,
	benefit,
	fontSize = 'md',
}) {
	return (
		<Flex mb={'.5rem'} align={'center'}>
			<Circle w={12} h={12} bg={'yellow.100'} mr={4}>
				{icon ? (
					<Icon as={icon} display={'block'} boxSize={6} />
				) : (
					<Circle boxSize={6} bg={'black'}>
						<Text color={'white'} fontSize={'md'} fontWeight={'bold'}>
							{text}
						</Text>
					</Circle>
				)}
			</Circle>
			<Text fontWeight={'bold'} fontSize={fontSize}>
				{benefit}
			</Text>
		</Flex>
	);
}
