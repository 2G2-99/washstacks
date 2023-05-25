import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

import { MdWater, MdOutlineIron } from 'react-icons/md';
import { WiStrongWind } from 'react-icons/wi';
import HeaderCell from './HeaderCell';
import DataCell from './DataCell';

export default function ServicesTable() {
	return (
		<TableContainer
			id="service-comparison_table_container"
			p={'1rem'}
			w={'100%'}
		>
			<Table
				id="service-comparison_table"
				variant={'striped'}
				colorScheme={'gray'}
				overflowX={'scroll'}
				whiteSpace={'normal'}
			>
				<TableCaption color={'white'}>
					Our minimum order value is £20.
				</TableCaption>

				<Thead>
					<Tr>
						<Th
							bg={'white'}
							w={'148px'}
							h={'128px'}
							borderTopLeftRadius={'md'}
						/>

						<HeaderCell
							bgHeader={'blue.50'}
							bgCircle={'blue.200'}
							icon1={MdWater}
							text={'Wash'}
						/>
						<HeaderCell
							bgHeader={'pink.50'}
							bgCircle={'pink.100'}
							position={'relative'}
							padding={'.7rem'}
							icon1={MdOutlineIron}
							icon2={MdWater}
							text={'Wash & Iron'}
						/>
						<HeaderCell
							bgHeader={'turquoise.50'}
							bgCircle={'turquoise.100'}
							icon1={WiStrongWind}
							text={'Dry Cleaning'}
						/>
						<HeaderCell
							bgHeader={'yellow.50'}
							bgCircle={'yellow.100'}
							icon1={MdOutlineIron}
							text={'Ironing'}
						/>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<DataCell
							text1={'What is included'}
							textAlign={'left'}
							fontWeight={'bold'}
							fontSize1={'1.5rem'}
							color1={'blue.400'}
						/>
						<DataCell
							text1={'WASH + TUMBLE +DRY'}
							fontWeight={'bold'}
							text2={'INCLUDES'}
						/>
						<DataCell
							text1={'WASH + TUMBLE-DRY+ IRONING'}
							fontWeight={'bold'}
						/>
						<DataCell text1={'DRY CLEANING + IRONING'} fontWeight={'bold'} />
						<DataCell text1={'IRONING'} fontWeight={'bold'} />
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
}
