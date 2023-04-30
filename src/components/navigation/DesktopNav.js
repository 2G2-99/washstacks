import NAV_ITEMS from '@/data/navItems';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	HStack,
	Icon,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export default function DesktopNav({ color, hoverColor }) {
	return (
		<HStack spacing={4}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={color}
								_hover={{
									textDecoration: 'none',
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'lg'}
								bg={'brand.900'}
								p={4}
								rounded={'md'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map(child => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</HStack>
	);
}

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('brand.150_shade', 'gray.900') }}
		>
			<HStack align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'brand.150' }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={'xs'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'brand.150'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</HStack>
		</Link>
	);
};
