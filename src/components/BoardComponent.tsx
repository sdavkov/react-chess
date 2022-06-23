import React from 'react'
import CellComponent from './CellComponent';
import storeBoard from '../store/board';
import { observer } from 'mobx-react-lite';

const BoardComponent = () => {

	return (
		<div className='board'>
			{storeBoard.board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map(cell => (
						<CellComponent
							key={cell.id}
							cell={cell}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default observer(BoardComponent)