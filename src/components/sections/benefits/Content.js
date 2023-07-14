import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Content({
	direction,
	image,
	fallbackImage,
	paddingImageOnLeft,
	paddingImageOnRight,
	marginOnLeft,
	marginOnRight,
	catchphrase,
	benefitTitle,
	benefitText,
	children,
}) {
	return (
		<Flex direction={direction} align={'center'}>
			<Flex flex={1.25} pl={paddingImageOnLeft} pr={paddingImageOnRight}>
				<Image
					src={image}
					fallbackSrc={fallbackImage}
					pl={paddingImageOnLeft}
					pr={paddingImageOnRight}
				/>
			</Flex>
			<Flex
				flex={0.75}
				direction={'column'}
				px={2.5}
				ml={marginOnLeft}
				mr={marginOnRight}
				mb={'3rem'}
			>
				<Text
					mb={'1rem'}
					textTransform={'uppercase'}
					fontWeight={'bold'}
					color={'grey.100'}
				>
					{catchphrase}
				</Text>
				<Heading as={'h3'} mb={'1rem'}>
					{benefitTitle}
				</Heading>
				<Text color={'grey.100'} mb={'1rem'}>
					{benefitText}
				</Text>
				{children}
			</Flex>
		</Flex>
	);
}
