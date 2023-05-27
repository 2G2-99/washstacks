import { Box, Show, Text, Icon, Center } from '@chakra-ui/react';

export default function ServiceInfo({
	bgColor = 'white',
	text1,
	textAlign = 'center',
	fontWeight,
	fontSize1,
	color1 = 'black',
	text2,
	color2 = 'black',
	icon1,
	icon2,
}) {
	return (
		<Center w={'168px'} h={'72px'} p={'.75rem'} bgColor={bgColor}>
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
		</Center>
	);
}
