import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import FAQDropdown from './FAQDropdown';
import { useState } from 'react';
import questions from '../../../data/questions.json';
import { Link } from '@chakra-ui/next-js';

export default function FAQ() {
	const firstQuestionId = questions.length > 0 ? questions[0].id : -1;
	const [openId, setOpenId] = useState(firstQuestionId);

	const handleToggle = (id) => {
		if (openId !== id) {
			setOpenId(id); // Activate the clicked dropdown only if it's not currently open
		}
	};

	return (
		<Box w={'full'} py={20}>
			<Container maxW={'container.lg'}>
				<Text textAlign={'center'} mb={20}>
					DO YOU HAVE ANY QUESTIONS?
				</Text>
				<VStack spacing={0}>
					{questions.map((question) => (
						<FAQDropdown
							key={question.id}
							headerText={question.text}
							bodyText={question.answer}
							isOpen={openId === question.id}
							onToggle={() => handleToggle(question.id)}
						/>
					))}
				</VStack>
				<Center mt={8} fontSize={'md'} fontWeight={'bold'} color={'blue.200'}>
					<Link href={'#'} _hover={{ textDecoration: 'none' }}>
						Visit our help center
					</Link>
				</Center>
			</Container>
		</Box>
	);
}
