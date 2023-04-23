import { Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export default function HeroHeading() {
	return (
		<Heading
			as={'h1'}
			mb={'1em'}
			color={'brand.900'}
			fontWeight={700}
			lineHeight={1.05}
			letterSpacing={'wider'}
			fontSize={useBreakpointValue({ base: '2.625rem', sm: '3.6rem' })}
		>
			Laundry & dry cleaning with 24h delivery in
			<Text color={'brand.400'}>London</Text>
		</Heading>
	);
}
