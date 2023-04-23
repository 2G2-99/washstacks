import {
	Flex,
	useBreakpointValue,
	Container,
	Box,
	Img,
	Image,
} from '@chakra-ui/react';

import HeroHeading from './HeroHeading';
import Timeslots from './cta/Timeslots';

export default function Hero() {
	return (
		<Flex
			id="hero"
			w={'full'}
			backgroundColor={'brand.100'}
			pt={useBreakpointValue({ base: '4.5em' })}
		>
			<Box
				w={useBreakpointValue({ base: 'full', md: '50%' })}
				mx={useBreakpointValue({ md: '1.5em' })}
			>
				<Flex
					mt={useBreakpointValue({ base: '2em', md: '7em' })}
					mx={useBreakpointValue({ base: '.75em' })}
					px={useBreakpointValue({ md: '1em' })}
				>
					<HeroHeading />
				</Flex>
				<Container
					maxW={useBreakpointValue({ base: 'full', md: '90%' })}
					backgroundColor={'white'}
					py={useBreakpointValue({ base: '1.75em', sm: '1.25em' })}
					borderRadius={useBreakpointValue({ md: 'md' })}
					mb={useBreakpointValue({ md: '7.7em' })}
				>
					<Timeslots />
				</Container>
			</Box>
			<Flex
				display={useBreakpointValue({ base: 'none', md: 'block' })}
				w={'50%'}
				px={'2em'}
				alignSelf={'flex-start'}
				mt={'7em'}
			>
				<Image
					src="https://prod-cdn.laundryheap.com/assets/landing/hero/europe_2x-45f94d1b0282fe5831ca474014e73457fdc71072ae5025cb6cc2ba48d283f5a8.jpg"
					fallbackSrc="../../assets/img/laundryheap-europe_2x.jpg"
					alt="A european, blonde girl holding a stack of blue jeans"
				/>
			</Flex>
		</Flex>
	);
}
