import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	Icon,
	VStack,
	HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { GiEnvelope } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/bs';

export default function SignupCard() {
	return (
		<Layout>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bg={useColorModeValue('gray.50', 'gray.800')}
			>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'} textAlign={'center'}>
							Sign up
						</Heading>
					</Stack>

					<VStack spacing={4}>
						<HStack>
							<Button
								border={'1px'}
								borderColor={'blackAlpha.50'}
								rounded={'full'}
								p={1}
							>
								<Icon as={FcGoogle} display={'block'} fontSize={'3xl'} />
							</Button>
							<Button background={'black'} rounded={'full'} p={2}>
								<Icon
									as={BsApple}
									display={'block'}
									fill={'white'}
									fontSize={'2xl'}
								/>
							</Button>
							<Button background={'#4267b2'} rounded={'full'} p={2}>
								<Icon
									as={BsFacebook}
									display={'block'}
									fill={'white'}
									fontSize={'2xl'}
								/>
							</Button>
						</HStack>
						<Flex
							w={'100%'}
							align={'center'}
							_before={{
								content: '""',
								borderBottom: '1px solid',
								borderColor: 'gray.800',
								flexGrow: 1,
								mr: 1.5,
							}}
							_after={{
								content: '""',
								borderBottom: '1px solid',
								borderColor: 'gray.800',
								flexGrow: 1,
								ml: 1.5,
							}}
						>
							<Text>or</Text>
						</Flex>
						<VStack as={'form'}>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" />
							</FormControl>
							<Stack>
								<Button
									loadingText="Submitting"
									size="lg"
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500',
									}}
								>
									<Icon as={GiEnvelope} mr={'.5em'} />
									Continue with Email
								</Button>
							</Stack>
							<VStack pt={6} spacing={'.05rem'}>
								<Text align={'center'}>
									Already a user?{' '}
									<Link color={'blue.400'} href="./login">
										Login
									</Link>
								</Text>
							</VStack>
						</VStack>
					</VStack>
				</Stack>
			</Flex>
		</Layout>
	);
}
