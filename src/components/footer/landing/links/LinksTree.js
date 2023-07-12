import { Link } from '@chakra-ui/next-js';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import linksLists from '../../../../data/linksLists.json';
import ChatButton from '@/components/ChatButton';

const ListHeader = ({ content }) => (
	<Text fontSize={'xl'} fontWeight={'bold'} mb={2}>
		{content}
	</Text>
);

const Branch = ({ subList, children }) => {
	return (
		<Stack align={'flex-start'} key={subList.id} spacing={4}>
			<ListHeader content={subList.label} />
			{subList.links.map((subListLink) => (
				<Link key={subListLink.id} href={subListLink.link}>
					{subListLink.label}
				</Link>
			))}
			{children}
		</Stack>
	);
};

export default function LinksTree() {
	return (
		<SimpleGrid columns={{ base: 2, md: 4 }} spacingY={8}>
			<Branch subList={linksLists[0]}>
				<ChatButton />
			</Branch>
			<Branch subList={linksLists[1]} />
			<Branch subList={linksLists[2]} />
			<Branch subList={linksLists[3]} />
		</SimpleGrid>
	);
}
