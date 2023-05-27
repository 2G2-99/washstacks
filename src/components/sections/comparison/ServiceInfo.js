import { Show, Text, Icon, VStack, HStack, Flex } from '@chakra-ui/react';

export default function ServiceInfo({
	bgColor = 'white',
	text,
	textAlign = 'center',
	fontWeight,
	fontSize,
	color = 'black',
	smText,
	smColor = 'black',
	icon,
	justify = 'center',
}) {
	const TextForSmallViewport = () => (
		<Show below="md">
			<Text fontSize={'.75rem'} color={smColor} textAlign={'center'}>
				{smText}
			</Text>
		</Show>
	);
	const TextAndIcon = () => (
		<>
			{icon ? (
				<HStack spacing={1}>
					<Icon as={icon} color={color} />
					<Text
						fontWeight={fontWeight}
						fontSize={fontSize}
						color={color}
						textAlign={textAlign}
					>
						{text}
					</Text>
				</HStack>
			) : (
				<Text
					fontWeight={fontWeight}
					fontSize={fontSize}
					color={color}
					textAlign={textAlign}
				>
					{text}
				</Text>
			)}
		</>
	);

	return (
		<Flex
			w={'168px'}
			p={'.75rem'}
			bgColor={bgColor}
			alignItems={'center'}
			justify={justify}
		>
			{smText ? (
				<VStack>
					<TextForSmallViewport />
					<TextAndIcon />
				</VStack>
			) : (
				<TextAndIcon />
			)}
		</Flex>
	);
}
