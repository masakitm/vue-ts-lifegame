type Cell = {
  id: string;
  live: boolean;
  row: number;
  index: number;
};

type Row = Cell[];

type Board = Row[];

type State = {
  board: Board;
};
