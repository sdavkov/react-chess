import { makeAutoObservable } from "mobx"
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";

class BoardStore {
	
	board = new Board();
	selectedCell: Cell | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	restart() {
		this.board = new Board();
	}

	setSelectedCell(cell: Cell | null) {
		this.selectedCell = cell;
		this.board.hightlightCells(this.selectedCell)
	}
}

export default new BoardStore()