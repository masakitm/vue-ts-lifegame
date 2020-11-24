import * as useLifeGame from "@/hooks/useLifeGame"

const {
  createRow,
  createBoard,
  isNextCell,
  countNeighbourLives,
  getNewLive
} = useLifeGame

const size = 8
const board = [
  [
    { id: 'cell_row0_index0', row: 0, index: 0, live: false },
    { id: 'cell_row0_index1', row: 0, index: 1, live: false },
    { id: 'cell_row0_index2', row: 0, index: 2, live: true },
    { id: 'cell_row0_index3', row: 0, index: 3, live: false },
    { id: 'cell_row0_index4', row: 0, index: 4, live: true },
    { id: 'cell_row0_index5', row: 0, index: 5, live: true },
    { id: 'cell_row0_index6', row: 0, index: 6, live: false },
    { id: 'cell_row0_index7', row: 0, index: 7, live: false }
  ],
  [
    { id: 'cell_row1_index0', row: 1, index: 0, live: false },
    { id: 'cell_row1_index1', row: 1, index: 1, live: true }, 
    { id: 'cell_row1_index2', row: 1, index: 2, live: false },
    { id: 'cell_row1_index3', row: 1, index: 3, live: false },
    { id: 'cell_row1_index4', row: 1, index: 4, live: false },
    { id: 'cell_row1_index5', row: 1, index: 5, live: true },
    { id: 'cell_row1_index6', row: 1, index: 6, live: false },
    { id: 'cell_row1_index7', row: 1, index: 7, live: false }
  ],
  [
    { id: 'cell_row2_index0', row: 2, index: 0, live: false },
    { id: 'cell_row2_index1', row: 2, index: 1, live: false },
    { id: 'cell_row2_index2', row: 2, index: 2, live: false },
    { id: 'cell_row2_index3', row: 2, index: 3, live: true },
    { id: 'cell_row2_index4', row: 2, index: 4, live: true },
    { id: 'cell_row2_index5', row: 2, index: 5, live: true },
    { id: 'cell_row2_index6', row: 2, index: 6, live: true },
    { id: 'cell_row2_index7', row: 2, index: 7, live: true }
  ],
  [
    { id: 'cell_row3_index0', row: 3, index: 0, live: false },
    { id: 'cell_row3_index1', row: 3, index: 1, live: false },
    { id: 'cell_row3_index2', row: 3, index: 2, live: false },
    { id: 'cell_row3_index3', row: 3, index: 3, live: false },
    { id: 'cell_row3_index4', row: 3, index: 4, live: true },
    { id: 'cell_row3_index5', row: 3, index: 5, live: false },
    { id: 'cell_row3_index6', row: 3, index: 6, live: true },
    { id: 'cell_row3_index7', row: 3, index: 7, live: false }
  ],
  [
    { id: 'cell_row4_index0', row: 4, index: 0, live: true },
    { id: 'cell_row4_index1', row: 4, index: 1, live: false },
    { id: 'cell_row4_index2', row: 4, index: 2, live: false },
    { id: 'cell_row4_index3', row: 4, index: 3, live: false },
    { id: 'cell_row4_index4', row: 4, index: 4, live: true },
    { id: 'cell_row4_index5', row: 4, index: 5, live: false },
    { id: 'cell_row4_index6', row: 4, index: 6, live: false },
    { id: 'cell_row4_index7', row: 4, index: 7, live: false }
  ],
  [
    { id: 'cell_row5_index0', row: 5, index: 0, live: true },
    { id: 'cell_row5_index1', row: 5, index: 1, live: false },
    { id: 'cell_row5_index2', row: 5, index: 2, live: false },
    { id: 'cell_row5_index3', row: 5, index: 3, live: false },
    { id: 'cell_row5_index4', row: 5, index: 4, live: true },
    { id: 'cell_row5_index5', row: 5, index: 5, live: false },
    { id: 'cell_row5_index6', row: 5, index: 6, live: false },
    { id: 'cell_row5_index7', row: 5, index: 7, live: true }
  ],
  [
    { id: 'cell_row6_index0', row: 6, index: 0, live: false },
    { id: 'cell_row6_index1', row: 6, index: 1, live: false },
    { id: 'cell_row6_index2', row: 6, index: 2, live: false },
    { id: 'cell_row6_index3', row: 6, index: 3, live: false },
    { id: 'cell_row6_index4', row: 6, index: 4, live: false },
    { id: 'cell_row6_index5', row: 6, index: 5, live: false },
    { id: 'cell_row6_index6', row: 6, index: 6, live: false },
    { id: 'cell_row6_index7', row: 6, index: 7, live: true }
  ],
  [
    { id: 'cell_row7_index0', row: 7, index: 0, live: false },
    { id: 'cell_row7_index1', row: 7, index: 1, live: false },
    { id: 'cell_row7_index2', row: 7, index: 2, live: false },
    { id: 'cell_row7_index3', row: 7, index: 3, live: false },
    { id: 'cell_row7_index4', row: 7, index: 4, live: true },
    { id: 'cell_row7_index5', row: 7, index: 5, live: true },
    { id: 'cell_row7_index6', row: 7, index: 6, live: false },
    { id: 'cell_row7_index7', row: 7, index: 7, live: true }
  ]
]

describe("lifeGame", () => {
  it("row", () => {
    expect(createRow(1, size).length).toBe(size)
    expect(createRow(1, size)[0].id).toBe(`cell_row1_index0`)
    expect(createRow(1, size)[0].row).toBe(1)
    expect(createRow(1, size)[0].index).toBe(0)
    expect(typeof createRow(1, size)[0].live).toBe(`boolean`)
  });

  it("board", () => {
    expect(createBoard(size).length).toBe(size)
    expect(createBoard(size)[0].length).toBe(size)
  });

  it("isNextCell", () => {
    // expect(isNextCell(board[size/2][size/2], board[size/2][size/2 + 1])).toBe();
  });

  it("countNeighbourLives", () => {

  });
});
