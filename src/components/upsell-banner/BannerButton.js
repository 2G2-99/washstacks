import { Button, Text } from '@chakra-ui/react';
import CustomLogoIcon from '../CustomLogoIcon';

export default function BannerButton() {
	return (
		<Button w={64} h={16}>
			<CustomLogoIcon fill={'blue.400'} marginRight={1} />
			<Text fontWeight={'bold'}>Schedule your pickup</Text>
		</Button>
	);
}
