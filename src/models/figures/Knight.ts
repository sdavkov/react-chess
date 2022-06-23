import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';

export class Knight extends Figure {

	constructor(color: Colors, cell: Cell) {
		super(color, cell);

		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KNIGHT;
	}

	knightRulesFollowed(target: Cell): boolean {
		const absX = Math.abs(this.cell.x - target.x);
		const absY = Math.abs(this.cell.y - target.y);		

		return (absX === 1 && absY === 2) || (absY === 1 && absX === 2);
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target))
			return false;
		if (this.knightRulesFollowed(target))
			return true;
		return false;
	}
}