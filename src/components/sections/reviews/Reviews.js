import { Link } from '@chakra-ui/next-js';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import UserReview from './UserReview';
import josephPic from 'public/img/joseph-gonzalez.jpg';
import girlPic from 'public/img/michael-dam-girl_1.jpg';
import juricaPic from 'public/img/jurica-koletic.jpg';

export default function Reviews() {
	return (
		<Box w={'full'} py={12}>
			<Container maxW={'container.lg'}>
				<Heading as={'h2'} textAlign={'center'} mb={2}>
					Our happy customers
				</Heading>
				<Text mb={6} textAlign={'center'}>
					Rated Excellent
					<Image
						src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/stars_1-1dc2c73f88790c1617a7d69c9e5da4f62e3b81d220d38753e9e9153edfa6caf6.svg"
						fallbackSrc="/svg/stars_4.5.svg"
						display={'inline-block'}
						px={2}
					/>
					by 5,000+ Users
				</Text>
				<Link
					display={'block'}
					textAlign={'center'}
					href={'#'}
					color={'blue.200'}
					fontWeight={'bold'}
					_hover={{ textDecoration: 'none' }}
				>
					Read more reviews
				</Link>
				<Flex
					wrap={'nowrap'}
					align={'start'}
					justify={'start'}
					overflowX={'auto'}
					scrollSnapStop={'always'}
					sx={{
						scrollSnapType: 'x mandatory',
						'&::-webkit-scrollbar': {
							display: 'none',
						},
					}}
				>
					<UserReview
						userName={'Martin'}
						testimonial={`This entire laundry experience was an absolute delight. The professionalism, efficiency, staff politeness, quality of service, and reasonable cost were all impressive. The service providers gave much-appreciated updates about all steps in the process. I highly recommend Laundryheap. They have perfected the art and science of laundry delivery service..`}
						imageSource={juricaPic}
					/>
					<UserReview
						userName={'Sophie'}
						testimonial={`Been using Laundryheap on and off for about 18 months and I've always had great experiences with them. The tracking on collection and drop off is really helpful and the app works well.`}
						imageSource={girlPic}
					/>
					<UserReview
						userName={'Joseph'}
						testimonial={`Great prices, excellent service and always on time. Best laundry service in United Kingdom!`}
						imageSource={josephPic}
					/>
				</Flex>
			</Container>
		</Box>
	);
}
