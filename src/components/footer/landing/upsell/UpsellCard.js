import { Link } from '@chakra-ui/next-js';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Icon,
	Text,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function UpsellCard({ image, buttonText, footerText }) {
	return (
		<Box mt={6} flex={1}>
			<Link href={'#'} _hover={{ textDecoration: 'none' }}>
				<Card minH={72} shadow={'none'}>
					<CardBody
						bgImage={image}
						bgPosition={'center'}
						bgSize={'cover'}
						rounded={'base'}
						position={'relative'}
						mb={3}
					>
						<Button
							bgColor={'white.100'}
							_hover={{ bgColor: 'white.100' }}
							rounded={'base'}
							position={'absolute'}
							bottom={5}
						>
							<Icon as={FiArrowUpRight} color={'blue.200'} boxSize={8} mr={2} />
							<Text fontSize={'lg'} fontWeight={'bold'}>
								{buttonText}
							</Text>
						</Button>
					</CardBody>
				</Card>
			</Link>
			<Text color={'grey.100'} _hover={{ textDecoration: 'none' }}>
				{footerText}
			</Text>
		</Box>
	);
}
