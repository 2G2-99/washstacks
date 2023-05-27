import { Box, Grid, GridItem } from '@chakra-ui/react';
import typesOfService from '../../../data/typesOfService.json';

import { MdWater, MdOutlineIron } from 'react-icons/md';
import { WiStrongWind } from 'react-icons/wi';
import ServiceHeader from './ServiceHeader';
import ServiceInfo from './ServiceInfo';

export default function Services() {
	return (
		<Grid
			templateColumns={'repeat(6, 1fr)'}
			columnGap={1}
			p={'1rem'}
			overflowX={'scroll'}
			sx={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
			}}
		>
			{/* Column Headers */}
			<GridItem
				bg={'white'}
				w={'168px'}
				h={'130px'}
				borderTopLeftRadius={'md'}
				borderTopRightRadius={'md'}
			/>
			<ServiceHeader
				bgColor={'blue.50'}
				bgCircle={'blue.200'}
				icon1={MdWater}
				text={'Wash'}
			/>
			<ServiceHeader
				bgColor={'pink.50'}
				bgCircle={'pink.100'}
				position={'relative'}
				padding={'.7rem'}
				icon1={MdOutlineIron}
				icon2={MdWater}
				text={'Wash & Iron'}
			/>
			<ServiceHeader
				bgColor={'turquoise.50'}
				bgCircle={'turquoise.100'}
				icon1={WiStrongWind}
				text={'Dry Cleaning'}
			/>
			<ServiceHeader
				bgColor={'yellow.50'}
				bgCircle={'yellow.100'}
				icon1={MdOutlineIron}
				text={'Ironing'}
			/>
			<ServiceHeader
				bgColor={'lighterBlue.50'}
				bgCircle={'lighterBlue.100'}
				icon1={MdOutlineIron}
				text={'Duvets & Bulky Items'}
			/>
			{/* First Row */}
			<ServiceInfo
				bgColor={'shade'}
				text1={'What is included'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize1={'1.25rem'}
				color1={'blue.400'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				text1={'WASH + TUMBLE +DRY'}
				fontSize1={'.75rem'}
				fontWeight={'bold'}
				text2={'INCLUDES'}
			/>
			<ServiceInfo
				bgColor="shade"
				text1={'WASH + TUMBLE-DRY + IRONING'}
				fontSize1={'.75rem'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor="shade"
				text1={'DRY CLEANING + IRONING'}
				fontSize1={'.75rem'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor="shade"
				text1={'IRONING'}
				fontSize1={'.75rem'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor="shade"
				text1={'CUSTOM CLEANING'}
				fontSize1={'.75rem'}
				fontWeight={'bold'}
			/>
		</Grid>
	);
}
