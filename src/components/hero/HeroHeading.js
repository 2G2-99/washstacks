import { Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const HeroHeading = () => {
	return (
		<Heading
			as={'h1'}
			mb={'1em'}
			color={'brand.900'}
			fontWeight={700}
			lineHeight={1.2}
			fontSize={useBreakpointValue({ base: '2.625rem', md: '4.5rem' })}
		>
			Laundry & dry cleaning with 24h delivery in
			<Text color={'brand.400'}>London</Text>
		</Heading>
	);
};

export default HeroHeading;
