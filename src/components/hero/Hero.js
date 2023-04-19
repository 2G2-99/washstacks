import { Flex, VStack, useBreakpointValue, Container } from '@chakra-ui/react';

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
			<VStack w={'full'}>
				<Container centerContent mt={'2em'}>
					<HeroHeading />
				</Container>
				<Container
					maxW={useBreakpointValue({ base: 'full', md: 'sm' })}
					backgroundColor={'white'}
					py={'1.75em'}
					borderRadius={{ md: '.25em' }}
				>
					<Timeslots />
				</Container>
			</VStack>
		</Flex>
	);
}
