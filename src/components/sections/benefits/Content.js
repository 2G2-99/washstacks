import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Content({
	direction,
	image,
	fallbackImage,
	marginOnLeft,
	marginOnRight,
	catchphrase,
	benefitTitle,
	benefitText,
	children,
}) {
	return (
		<Flex direction={direction}>
			<Box w={{ md: '50%' }}>
				<Image src={image} fallbackSrc={fallbackImage} />
			</Box>
			<Box w={{ md: '50%' }} ml={marginOnLeft} mr={marginOnRight} px={'10px'}>
				<Text textTransform={'uppercase'}>{catchphrase}</Text>
				<Heading as={'h3'} mb={'1rem'}>
					{benefitTitle}
				</Heading>
				<Text>{benefitText}</Text>
				{children}
			</Box>
		</Flex>
	);
}
