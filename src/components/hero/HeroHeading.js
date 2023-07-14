import { Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export default function HeroHeading() {
	return (
		<Heading
			as={'h1'}
			mb={8}
			color={'white.50'}
			lineHeight={1}
			fontSize={useBreakpointValue({
				base: '4xl',
				sm: '5xl',
				md: '6xl',
				xl: '7xl',
			})}
		>
			Laundry & dry cleaning with 24h delivery
			<Text h={'2em'} color={'yellow.100'}>
				London
			</Text>
		</Heading>
	);
}
