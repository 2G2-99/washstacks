import { Flex, useBreakpointValue, Container, Box } from '@chakra-ui/react';

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
		</Flex>
	);
}
