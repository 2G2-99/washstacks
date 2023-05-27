import {
	Box,
	Center,
	Circle,
	Text,
	Icon,
	VStack,
	GridItem,
} from '@chakra-ui/react';

export default function ServiceHeader({
	bgColor,
	bgCircle,
	position,
	padding = '.25rem',
	icon1,
	icon2,
	text,
}) {
	return (
		<GridItem
			bg={bgColor}
			w={'168px'}
			h={'130px'}
			borderTopLeftRadius={'md'}
			borderTopRightRadius={'md'}
			className="service-header"
		>
			<Center h={'100%'}>
				<VStack>
					<Circle bg={bgCircle} position={position} p={padding}>
						{icon2 ? (
							<>
								<Icon
									as={icon1}
									position={'relative'}
									top={-2}
									fontSize={'1.125rem'}
									color={'blue.400'}
								/>
								<Icon
									as={icon2}
									position={'absolute'}
									bottom={-0.25}
									fontSize={'1.5rem'}
									color={'blue.400'}
								/>
							</>
						) : (
							<Icon
								as={icon1}
								fontSize={'2rem'}
								p={'.25rem'}
								color={'blue.400'}
							/>
						)}
					</Circle>
					<Text textAlign={'center'} color={'black'} fontWeight={'bold'}>
						{text}
					</Text>
				</VStack>
			</Center>
		</GridItem>
	);
}
