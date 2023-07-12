import { Link } from '@chakra-ui/next-js';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import locations from '../../../../data/locations.json';

function Location({ name }) {
	return (
		<Link
			href={'#'} // Here goes "link" for "location.link"
			py={3}
			color={'grey'}
			bgColor={'white.100'}
			border={'1px'}
			borderColor={'grey'}
			rounded={'base'}
			_hover={{ textDecoration: 'none' }}
			textAlign={'center'}
		>
			{name}
		</Link>
	);
}

export default function LocationsWrapper() {
	return (
		<Stack spacing={6}>
			<Heading as={'h6'} fontSize={'lg'}>
				WashStacks in United Kingdom
			</Heading>
			<SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
				{locations.map((location) => (
					<Location key={location.id} name={location.name} />
				))}
			</SimpleGrid>
		</Stack>
	);
}
