import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Figure {

	isFirstStep: boolean;
	direction: 1 | -1;
	firstStepDirection: 2 | -2;

	constructor(color: Colors, cell: Cell) {
		super(color, cell);

		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.PAWN;
		this.isFirstStep = true;
		this.direction = this.cell.y === 1 ? 1 : -1;
		this.firstStepDirection = this.cell.y === 1 ? 2 : -2;
	}

	pawnRulesFollowed(target: Cell): boolean {
		if ((target.y === this.cell.y + this.direction || this.isFirstStep && target.y === this.cell.y + this.firstStepDirection)
			&& target.x === this.cell.x
			&& this.cell.board.getCell(target.x, target.y).isEmpty()) {
			return true;
		}

		if (target.y === this.cell.y + this.direction
			&& (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
			&& this.cell.isEnemy(target)) {
			return true;
		}

		return false;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target))
			return false;
		if (this.pawnRulesFollowed(target))
			return true;
		return false;
	}

	moveFigure(target: Cell): void {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}