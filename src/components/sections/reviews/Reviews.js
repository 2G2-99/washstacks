import { Link } from '@chakra-ui/next-js';
import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import UserReview from './UserReview';

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
					overflowX={'scroll'}
					scrollSnapStop={'always'}
					sx={{
						'::-webkit-scrollbar': {
							display: 'none',
						},
					}}
				>
					<UserReview
						userName={'Sophie'}
						testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
						imageSource={'/img/michael-dam-girl_1.jpg'}
					/>
					<UserReview
						userName={'Sophie'}
						testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
						imageSource={'/img/michael-dam-girl_1.jpg'}
					/>
					<UserReview
						userName={'Sophie'}
						testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
						imageSource={'/img/michael-dam-girl_1.jpg'}
					/>
				</Flex>
			</Container>
		</Box>
	);
}

/**
 * TODO: Find a way to make the card list to scroll on overflow
 * <Flex
					wrap={'nowrap'}
					align={'start'}
					justify={'start'}
					overflowX={'scroll'}
					scrollSnapStop={'always'}
					sx={{
						'::-webkit-scrollbar': {
							display: 'none',
						},
					}}
				>
					<Box w={{ base: '100%', md: '33.33%' }}>
						<UserReview
							userName={'Sophie'}
							testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
							imageSource={'/img/michael-dam-girl_1.jpg'}
						/>
					</Box>
					<Box w={{ base: '100%', md: '33.33%' }}>
						<UserReview
							userName={'Sophie'}
							testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
							imageSource={'/img/michael-dam-girl_1.jpg'}
						/>
					</Box>
					<Box w={{ base: '100%', md: '33.33%' }}>
						<UserReview
							userName={'Sophie'}
							testimonial={`They're a great service when they pickup and deliver on time. Given my busy schedule, I appreciate having a service that I can rely on.`}
							imageSource={'/img/michael-dam-girl_1.jpg'}
						/>
					</Box>
				</Flex> */

/**
* ? Implementing this might do the job
import { Box, Text, Image, Flex } from "@chakra-ui/react";

function ReviewCardList() {
  return (
    <Flex wrap="nowrap" className="review-card-list">
      <Box
        w={{ base: "100%", md: "33.33%" }}
        p={6}
        className="review-card"
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
      >
        <Text fontSize="md" mb={4} className="review-body text-body-main">
          Been using Laundryheap on and off for about 18 months and I've always
          ...
        </Text>
        <Flex align="center" mb={4}>
          <Box className="name-image" mr={2}>
            <Image
              src="https://prod-cdn.laundryheap.com/assets/faces/female/2-1970a7ddfc4bb424657a57d70c3341deef6b4d97773a773a1e12ddf6e602998f.jpg"
              alt="User Image"
              boxSize="44px"
            />
          </Box>
          <Box className="name-body">
            <Text fontSize="lg" className="review-name text-body-main">
              Maya
            </Text>
            <Image
              src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/stars_2-7bf43dd2b54116645eb9b9ad39d73b5555092bce4bd867904a2829a1a6166744.svg"
              alt="Review Stars"
              boxSize="91px"
              mb={3}
              display="block"
            />
          </Box>
        </Flex>
        <Image
          src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/brands/google-9ff79bfdc82bf8cba6ed43bcfe794af0ffb4dcd6a2db89b43b5489b924ea489a.png"
          alt="Google Logo"
          boxSize="104px"
          display="block"
        />
      </Box>
      ...Add other review cards here ...
    </Flex>
  );
}

export default ReviewCardList;

				 */
