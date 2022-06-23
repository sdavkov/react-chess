import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {

	constructor(color: Colors, cell: Cell) {
		super(color, cell);

		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}

	kingRulesFollowed(target: Cell): boolean {
		if (this.cell.isEmptyHorizontal(target, true)
		|| this.cell.isEmptyVertical(target, true)
		|| this.cell.isEmptyDiagonal(target, true)) {
			return true;
		}
		return false;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target))
			return false;
		if (this.kingRulesFollowed(target))
			return true;
		return false;
	}
}