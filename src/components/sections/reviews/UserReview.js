import { Image } from '@chakra-ui/next-js';
import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Text,
	VStack,
} from '@chakra-ui/react';

export default function UserReview({
	testimonial,
	imageSource,
	fallbackImageSource,
	userName,
}) {
	return (
		<Card
			boxShadow={'none'}
			minW={{ base: '80%', md: '33.33%' }}
			sx={{ scrollSnapAlign: 'start' }}
		>
			<CardBody>
				<Text>{testimonial}</Text>
			</CardBody>
			<CardFooter pt={0}>
				<Box boxSize={'44px'} position={'relative'} mr={1.5}>
					<Image
						src={imageSource}
						fallbackSrc={fallbackImageSource}
						alt="User photo"
						fill
						sizes="(max-width: 30em) 44px, (max-width: 80em) 44px"
						rounded="full"
						loading="lazy"
						placeholder="blur"
					/>
				</Box>
				<VStack align={'flex-start'} spacing={0}>
					<Text fontWeight={'bold'}>{userName}</Text>
					<Image
						src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/stars_2-7bf43dd2b54116645eb9b9ad39d73b5555092bce4bd867904a2829a1a6166744.svg"
						fallbackSrc="/svg/stars_5.svg"
						alt="Five stars review"
						width={91}
						height={17}
					/>
				</VStack>
			</CardFooter>
		</Card>
	);
}
