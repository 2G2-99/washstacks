import { Box } from '@chakra-ui/react';

export default function CustomLogoIcon({ fill, marginRight }) {
	return (
		<Box
			as="svg"
			width="20px"
			height="20px"
			mr={marginRight}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 300"
			fill={fill}
		>
			<path d="m104.534 208.477-36.019 68.446h132.49L294 100.208h-97.786l-56.976 108.269h-34.704Z" />
			<path d="M98.995 15.385h126.49L132.49 192.099H6L98.995 15.385Z" />
		</Box>
	);
}
