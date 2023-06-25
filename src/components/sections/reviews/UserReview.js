import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Text,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

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
				<Image
					src={imageSource}
					alt="User photo"
					width={48}
					height={48}
					placeholder="blur"
					quality={100}
					style={{ borderRadius: '50%', marginRight: '.375rem' }}
				/>
				<VStack align={'flex-start'} spacing={0}>
					<Text fontWeight={'bold'}>{userName}</Text>
					<Image
						src="/svg/stars_5.svg"
						alt="Five stars review"
						width={91}
						height={17}
					/>
				</VStack>
			</CardFooter>
		</Card>
	);
}
