import { Box, Container, Text, VStack } from '@chakra-ui/react';
import FAQDropdown from './FAQDropdown';
import { useState } from 'react';
import questions from '../../../data/questions.json';

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
			</Container>
		</Box>
	);
}

/**
 * *How to close drawer that is already open
	const [openId, setOpenId] = useState(-1);

	const handleToggle = (id) => {
		if (openId === id) {
			setOpenId(-1); // If clicked dropdown is currently active, collapse it
		} else {
			setOpenId(id); // Activate the clicked dropdown
		}
	};
 */

/**
	 * const [open, setOpen] = useState(false);
	 *
	 * const handleClick = () => {
			setIsOpen(!isOpen);
		};
	 */
