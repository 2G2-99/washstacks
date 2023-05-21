import {
	Flex,
	useBreakpointValue,
	Container,
	Box,
	Image,
} from '@chakra-ui/react';

import HeroHeading from './HeroHeading';
import Timeslots from './cta/Timeslots';

export default function Hero() {
	return (
		<Box
			id="hero"
			w={'full'}
			backgroundColor={'blue.200'}
			pt={useBreakpointValue({ base: '5.5em' })}
		>
			<Container
				maxW={useBreakpointValue({
					base: 'full',
					sm: 'container.sm',
					md: 'container.lg',
					lg: 'container.xl',
				})}
			>
				<Flex
					mx={useBreakpointValue({ md: '1.5em' })}
					wrap
					direction={'row'}
				>
					<Box
						mt={useBreakpointValue({ base: '2em', md: '3em' })}
						px={useBreakpointValue({ base: '.75em' })}
						w={useBreakpointValue({ base: 'full', md: '50%' })}
					>
						<HeroHeading />
						<Container
							display={{ base: 'none', md: 'block' }}
							backgroundColor={'brand.white'}
							py={'1rem'}
							borderRadius={useBreakpointValue({ md: '.25rem' })}
							mb={useBreakpointValue({ md: '7em' })}
							maxW={'full'}
						>
							<Timeslots />
						</Container>
					</Box>
					<Flex
						display={useBreakpointValue({ base: 'none', md: 'block' })}
						w={'50%'}
						px={'.75em'}
						alignSelf={'flex-start'}
						mt={useBreakpointValue({ base: '2em', md: '3em' })}
						mb={{ lg: '.5em' }}
					>
						<Image
							fallbackSrc="/img/laundryheap-europe_2x.jpg"
							src="https://prod-cdn.laundryheap.com/assets/landing/hero/europe_2x-45f94d1b0282fe5831ca474014e73457fdc71072ae5025cb6cc2ba48d283f5a8.jpg"
							alt="A european, blonde girl holding a stack of blue jeans"
						/>
					</Flex>
				</Flex>
			</Container>
			<Container
				w={'full'}
				bg={'brand.white'}
				py={'1.75em'}
				display={{ md: 'none' }}
			>
				<Timeslots />
			</Container>
		</Box>
	);
}
