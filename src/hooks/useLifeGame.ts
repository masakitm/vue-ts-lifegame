import { reactive } from "vue";

const THRESHOULD = 0.3;

export const createRow = (rowIndex: number, size: number): Row => {
  const row = [];

  for (let i = 0; i < size; i++) {
    row.push({
      id: `cell_row${rowIndex}_index${i}`,
      row: rowIndex,
      index: i,
      live: Math.random() <= THRESHOULD
    });
  }

  return row;
};

export const createBoard = (size: number): Board => {
  const board = [];

  for (let i = 0; i < size; i++) {
    board.push(createRow(i, size));
  }

  return board;
};

export const isNextCell = (centerCell: Cell, cell: Cell): boolean => {
  // 左隣接
  if (
    cell.index === centerCell.index - 1 &&
    (cell.row === centerCell.row ||
      cell.row === centerCell.row + 1 ||
      cell.row === centerCell.row - 1)
  ) {
    return true;
  }

  // 右隣接
  if (
    cell.index === centerCell.index + 1 &&
    (cell.row === centerCell.row ||
      cell.row === centerCell.row + 1 ||
      cell.row === centerCell.row - 1)
  ) {
    return true;
  }

  // 縦隣接
  if (
    cell.index === centerCell.index &&
    (cell.row === centerCell.row + 1 || cell.row === centerCell.row - 1)
  ) {
    return true;
  }

  return false;
};

export const countNeighbourLives = (board: Board, centerCell: Cell): number => {
  const livingNeighbours = board.flat().reduce((acc: boolean[], cell) => {
    return isNextCell(centerCell, cell) && cell.live
      ? [...acc, cell.live]
      : acc;
  }, []);

  return livingNeighbours.length;
};

export const getNewLive = (board: Board, cell: Cell): boolean => {
  const lives = countNeighbourLives(board, cell);

  if (lives === 3) {
    return true;
  }

  if (lives === 2 && cell.live) {
    return true;
  }

  return false;
};

export function useLifeGame({
  interval = 1000,
  size = 8
}: {
  [key: string]: number;
}) {
  const state = reactive<State>({
    board: []
  });

  let intervalId = 0;

  const updateBoard = () => {
    const board = state.board;

    const newBoard = board.map(row => {
      return row.map(cell => {
        return {
          ...cell,
          live: getNewLive(board, cell)
        };
      });
    });

    state.board = newBoard;
  };

  const init = () => {
    state.board = createBoard(size);
  };

  const run = () => {
    intervalId = setInterval(updateBoard, interval);
  };

  const stop = () => {
    clearInterval(intervalId);
  };

  return {
    init,
    run,
    stop,
    state
  };
}
