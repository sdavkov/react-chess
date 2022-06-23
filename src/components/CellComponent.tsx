import { observer } from 'mobx-react-lite';
import { FC } from 'react'
import { Cell } from '../models/Cell';
import storeBoard from '../store/board';

interface CellProps {
	cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {

	const onCellClick = (cell: Cell) => {
		if (storeBoard.selectedCell && storeBoard.selectedCell !== cell && storeBoard.selectedCell.figure && storeBoard.selectedCell.figure.canMove(cell)) {
			storeBoard.selectedCell.moveFigure(cell);
			storeBoard.setSelectedCell(null);
		}
		else if (storeBoard.selectedCell && storeBoard.selectedCell === cell) {
			storeBoard.setSelectedCell(null);
		}
		else if (cell.figure) {
			storeBoard.setSelectedCell(cell);
		}
	}

	const selected = storeBoard.selectedCell && cell.x === storeBoard.selectedCell.x && cell.y === storeBoard.selectedCell.y;

	return (
		<div
			className={['cell', cell.color, selected ? 'selected' : '', cell.figure && cell.available ? 'available' : ''].join(' ')}
			onClick={() => onCellClick(cell)}
		>
			{cell.available && !cell.figure && <div className="available"></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
		</div>
	)
}

export default observer(CellComponent)