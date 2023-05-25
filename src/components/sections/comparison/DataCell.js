import { Icon, Show, Td, Text } from '@chakra-ui/react';

export default function DataCell({
	text1,
	textAlign = 'center',
	fontWeight,
	fontSize1 = '.75rem',
	color1 = 'black',
	text2,
	color2 = 'black',
	icon1,
	icon2,
}) {
	return (
		<Td w={'148px'} h={'72px'}>
			<Show below="sm">
				<Text fontSize={'.75rem'} color={color2} textAlign={'center'}>
					{text2}
				</Text>
			</Show>
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
			) : icon1 ? (
				<Icon as={icon1} fontSize={'2rem'} p={'.25rem'} color={'blue.400'} />
			) : null}
			<Text
				fontWeight={fontWeight}
				fontSize={fontSize1}
				color={color1}
				textAlign={textAlign}
			>
				{text1}
			</Text>
		</Td>
	);
}
