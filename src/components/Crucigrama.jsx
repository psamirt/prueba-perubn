import { useEffect } from "react";
import { questions } from "../assets/utils/crossword";

const gridSize = 5;

const Crucigrama = ({
  selectedCell,
  setSelectedCell,
  userGrid,
  currentQuestion,
  setCurrentQuestionIndex,
  direction,
  setCurrentPage,
}) => {
  const grid = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(null));

  questions.forEach((question) => {
    question.cells.forEach((cell) => {
      const existingCell = grid[cell.y][cell.x];

      if (existingCell) {
        if (
          cell.x === question.position.x &&
          cell.y === question.position.y &&
          question.number &&
          !existingCell.number
        ) {
          existingCell.number = question.number;
        }
      } else {
        grid[cell.y][cell.x] = {
          letter: cell.letter,
          isFirstCell:
            cell.x === question.position.x && cell.y === question.position.y,
          number:
            cell.x === question.position.x &&
            cell.y === question.position.y &&
            question.number
              ? question.number
              : null,
        };
      }
    });
  });

  const handleCellClick = (cellIndex, rowIndex) => {
    if (grid[rowIndex][cellIndex]) {
      setSelectedCell({ x: cellIndex, y: rowIndex });
      const horizontalQuestion = questions.find(
        (q) =>
          q.direction === "horizontal" &&
          q.cells.some((cell) => cell.x === cellIndex && cell.y === rowIndex)
      );

      const verticalQuestion = questions.find(
        (q) =>
          q.direction === "vertical" &&
          q.cells.some((cell) => cell.x === cellIndex && cell.y === rowIndex)
      );
      const question =
        direction === "horizontal"
          ? horizontalQuestion
          : direction === "vertical"
          ? verticalQuestion
          : null;

      if (question) {
        setCurrentQuestionIndex(questions.indexOf(question));
      }
    }
  };

  useEffect(() => {
    const allValidCells = [];

    questions.forEach((question) => {
      question.cells.forEach((cell) => {
        const key = `${cell.x}-${cell.y}`;
        if (!allValidCells.includes(key)) {
          allValidCells.push(key);
        }
      });
    });
    const allCompleted = allValidCells.every((key) => userGrid[key]?.trim());

    if (allCompleted) {
      setCurrentPage("end");
    }
  }, [setCurrentPage, userGrid]);

  return (
    <div className="grid grid-cols-5 border-2 mt-4 relative">
      {grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const isWhite = cell !== null;
          const isSelected =
            selectedCell &&
            selectedCell.x === cellIndex &&
            selectedCell.y === rowIndex;

          const isInCurrentWord = currentQuestion?.cells?.some(
            (c) => c.x === cellIndex && c.y === rowIndex
          );

          return (
            <div
              key={`${rowIndex}-${cellIndex}`}
              onClick={() => handleCellClick(cellIndex, rowIndex)}
              className={`w-[59px] h-[59px] flex items-start justify-start relative border-[0.5px] border-[#bababa]
                  ${
                    isWhite
                      ? isSelected
                        ? "bg-[#ffda00]"
                        : isInCurrentWord
                        ? "bg-[#a7d8ff]"
                        : "bg-white cursor-pointer"
                      : "bg-black cursor-not-allowed"
                  }
                  "
                `}
            >
              {cell?.number && (
                <span className="absolute px-1 text-black">{cell.number}</span>
              )}
              <div className="w-full h-full flex items-center justify-center text-4xl">
                {userGrid[`${cellIndex}-${rowIndex}`] || ""}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Crucigrama;
