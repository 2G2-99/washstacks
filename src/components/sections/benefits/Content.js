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
			<Box
				w={{ md: '50%' }}
				px={'10px'}
				ml={marginOnLeft}
				mr={marginOnRight}
				mb={'3rem'}
			>
				<Text
					mb={'1rem'}
					textTransform={'uppercase'}
					fontWeight={'bold'}
					color={'grey'}
				>
					{catchphrase}
				</Text>
				<Heading as={'h3'} mb={'1rem'}>
					{benefitTitle}
				</Heading>
				<Text color={'grey'} mb={'1rem'}>
					{benefitText}
				</Text>
				{children}
			</Box>
		</Flex>
	);
}
