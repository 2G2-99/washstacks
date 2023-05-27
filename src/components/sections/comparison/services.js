import { Box, Grid, GridItem } from '@chakra-ui/react';
import typesOfService from '../../../data/typesOfService.json';

import { MdWater, MdOutlineIron } from 'react-icons/md';
import { WiStrongWind } from 'react-icons/wi';
import { BsClockHistory } from 'react-icons/bs';
import { TbMoneybag, TbHanger } from 'react-icons/tb';
import { RiLeafFill } from 'react-icons/ri';
import ServiceHeader from './ServiceHeader';
import ServiceInfo from './ServiceInfo';
import ServiceBottom from './ServiceBottom';

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
				text={'What is included'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				text={'WASH + TUMBLE +DRY'}
				fontSize={'.75rem'}
				fontWeight={'bold'}
				smText={'INCLUDES'}
				text2={'INCLUDES'}
			/>
			<ServiceInfo
				bgColor="shade"
				text={'WASH + TUMBLE-DRY + IRONING'}
				fontSize={'.75rem'}
				fontWeight={'bold'}
				smText={'INCLUDES'}
			/>
			<ServiceInfo
				bgColor="shade"
				text={'DRY CLEANING + IRONING'}
				fontSize={'.75rem'}
				fontWeight={'bold'}
				smText={'INCLUDES'}
			/>
			<ServiceInfo
				bgColor="shade"
				text={'IRONING'}
				fontSize={'.75rem'}
				fontWeight={'bold'}
				smText={'INCLUDES'}
			/>
			<ServiceInfo
				bgColor="shade"
				text={'CUSTOM CLEANING'}
				fontSize={'.75rem'}
				fontWeight={'bold'}
				smText={'INCLUDES'}
			/>
			{/* Second Row */}
			<ServiceInfo
				text={'Typically included items'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo
				text={'T-shirts, trousers, bedsheets and undergarments.'}
				fontSize={'.875rem'}
			/>
			<ServiceInfo
				text={'Shirts, t-shirts, trousers and bedsheets.'}
				fontSize={'.875rem'}
			/>
			<ServiceInfo
				text={'Suits, shirts, dresses and coats.'}
				fontSize={'.875rem'}
			/>
			<ServiceInfo
				text={'Shirts, t-shirts and bedsheets.'}
				fontSize={'.875rem'}
			/>
			<ServiceInfo
				text={'Duvets, pillows and blankets.'}
				fontSize={'.875rem'}
			/>
			{/* Third Row */}
			<ServiceInfo
				bgColor={'shade'}
				text={'Service time'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				icon={BsClockHistory}
				text={'24h*'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				icon={BsClockHistory}
				text={'24h*'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				icon={BsClockHistory}
				text={'24h*'}
				fontWeight={'bold'}
			/>
			<ServiceInfo
				bgColor={'shade'}
				icon={BsClockHistory}
				text={'24h*'}
				fontWeight={'bold'}
			/>
			<ServiceInfo bgColor={'shade'} text={'Up to 3 days'} />
			{/* Fourth Row */}
			<ServiceInfo
				text={'Pricing'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo
				text={'PRICE PER WEIGHT from £16.95/ 6kg'}
				fontSize={'.875rem'}
			/>
			<ServiceInfo text={'PRICE PER ITEM from £2'} fontSize={'.875rem'} />
			<ServiceInfo text={'PRICE PER ITEM from £2'} fontSize={'.875rem'} />
			<ServiceInfo text={'PRICE PER ITEM from £1.20'} fontSize={'.875rem'} />
			<ServiceInfo text={'PRICE PER ITEM from £10.95'} fontSize={'.875rem'} />
			{/* Fifth Row */}
			<ServiceInfo
				bgColor={'shade'}
				text={'Delivery'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo bgColor={'shade'} text={'FREE'} fontWeight={'bold'} />
			<ServiceInfo bgColor={'shade'} text={'FREE'} fontWeight={'bold'} />
			<ServiceInfo bgColor={'shade'} text={'FREE'} fontWeight={'bold'} />
			<ServiceInfo bgColor={'shade'} text={'FREE'} fontWeight={'bold'} />
			<ServiceInfo bgColor={'shade'} text={'FREE'} fontWeight={'bold'} />
			{/* Sixth Row */}
			<ServiceInfo
				text={'Items returned'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo
				icon={TbMoneybag}
				text={'IN A LAUNDRYHEAP BAG'}
				fontSize={'.5rem'}
			/>
			<ServiceInfo icon={TbHanger} text={'ON HANGERS'} fontSize={'.5rem'} />
			<ServiceInfo icon={TbHanger} text={'ON HANGERS'} fontSize={'.5rem'} />
			<ServiceInfo icon={TbHanger} text={'ON HANGERS'} fontSize={'.5rem'} />
			<ServiceInfo
				icon={TbMoneybag}
				text={'IN A LAUNDRYHEAP BAG'}
				fontSize={'.5rem'}
			/>
			{/* Seventh Row */}
			<ServiceInfo
				bgColor={'shade'}
				text={'Eco friendly'}
				textAlign={'left'}
				fontWeight={'bold'}
				fontSize={'1.25rem'}
				color={'blue.400'}
				justify={'normal'}
			/>
			<ServiceInfo bgColor={'shade'} icon={RiLeafFill} color="turquoise.100" />
			<ServiceInfo bgColor={'shade'} icon={RiLeafFill} color="turquoise.100" />
			<ServiceInfo bgColor={'shade'} icon={RiLeafFill} color="turquoise.100" />
			<ServiceInfo bgColor={'shade'} icon={RiLeafFill} color="turquoise.100" />
			<ServiceInfo bgColor={'shade'} icon={RiLeafFill} color="turquoise.100" />
			{/* Bottom */}
			<GridItem
				bg={'white'}
				w={'168px'}
				h={'64px'}
				borderBottomLeftRadius={'md'}
				borderBottomRightRadius={'md'}
			/>
			<ServiceBottom />
			<ServiceBottom />
			<ServiceBottom />
			<ServiceBottom />
			<ServiceBottom />
		</Grid>
	);
}
