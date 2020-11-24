import {
  createRow,
  createBoard,
  isNextCell,
  getNeighboursLiveState,
  getNewLiveState
} from "../hooks/useLifeGame";

describe("lifeGame", () => {
  it("row", () => {
    expect(createRow()).toMatch();
  });

  it("board", () => {
    expect(createBoard()).toMatch();
  });

  it("isNextCell", () => {
    expect(isNextCell()).toMatch();
  });

  it("getNeighboursLiveState", () => {
    expect(getNeighboursLiveState()).toMatch();
  });

  it("getNewLiveState", () => {
    expect().toMatch();
  });
});
