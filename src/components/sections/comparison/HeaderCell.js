import { Center, Circle, Icon, Text, Th } from '@chakra-ui/react';

export default function HeaderCell({
	bgHeader,
	bgCircle,
	position,
	padding = '.25rem',
	icon1,
	icon2,
	text,
}) {
	return (
		<Th bg={bgHeader} w={'148px'} h={'118px'}>
			<Center>
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
								zIndex={99}
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
			</Center>
			<Text textAlign={'center'} color={'black'} pt={'.25rem'}>
				{text}
			</Text>
		</Th>
	);
}
