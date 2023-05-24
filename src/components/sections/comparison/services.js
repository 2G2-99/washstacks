import {
	Table,
	TableCaption,
	TableContainer,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

import { MdWater, MdOutlineIron } from 'react-icons/md';
import { WiStrongWind } from 'react-icons/wi';
import ColumnHeader from './ColumnHeader';

export default function ServicesTable() {
	return (
		<TableContainer p={'1rem'}>
			<Table>
				<TableCaption color={'white'}>
					Our minimum order value is £20.
				</TableCaption>

				<Thead>
					<Tr>
						<Th
							bg={'white'}
							w={'168px'}
							h={'128px'}
							borderTopLeftRadius={'md'}
						/>

						<ColumnHeader
							bgHeader={'blue.50'}
							bgCircle={'blue.200'}
							icon1={MdWater}
							text={'Wash'}
						/>
						<ColumnHeader
							bgHeader={'pink.50'}
							bgCircle={'pink.100'}
							position={'relative'}
							padding={'.7rem'}
							icon1={MdOutlineIron}
							icon2={MdWater}
							text={'Wash & Iron'}
						/>
						<ColumnHeader
							bgHeader={'turquoise.50'}
							bgCircle={'turquoise.100'}
							icon1={WiStrongWind}
							text={'Dry Cleaning'}
						/>
						<ColumnHeader
							bgHeader={'yellow.50'}
							bgCircle={'yellow.100'}
							icon1={MdOutlineIron}
							text={'Ironing'}
						/>
					</Tr>
				</Thead>
			</Table>
		</TableContainer>
	);
}
