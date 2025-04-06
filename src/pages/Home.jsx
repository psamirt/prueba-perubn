import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Keyboard from "../components/Keyboard";
import Crucigrama from "../components/Crucigrama";
import { questions } from "../assets/utils/crossword";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Home({ setCurrentPage }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCell, setSelectedCell] = useState({ x: 2, y: 0 });
  const [userGrid, setUserGrid] = useState({});
  const [input, setInput] = useState("");
  const currentQuestion = questions[currentQuestionIndex];
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    if (currentQuestionIndex <= 4) {
      setDirection("horizontal");
    } else {
      setDirection("vertical");
    }
  }, [currentQuestionIndex]);

  const insertLetter = (letter) => {
    if (selectedCell) {
      const key = `${selectedCell.x}-${selectedCell.y}`;
      setUserGrid((prevGrid) => ({
        ...prevGrid,
        [key]: letter,
      }));

      const current = questions[currentQuestionIndex];
      const idx = current.cells.findIndex(
        (cell) => cell.x === selectedCell.x && cell.y === selectedCell.y
      );

      const nextCell = current.cells[idx + 1];

      if (nextCell) {
        setSelectedCell({ x: nextCell.x, y: nextCell.y });
      } else {
        const nextIndex =
          currentQuestionIndex === questions.length - 1
            ? 0
            : currentQuestionIndex + 1;

        setCurrentQuestionIndex(nextIndex);
        const nextQuestion = questions[nextIndex];
        const firstCell = nextQuestion.cells[0];
        setSelectedCell({ x: firstCell.x, y: firstCell.y });
      }
    }
  };

  const handleChangeQuestion = (direction) => {
    const newIndex =
      direction === "previous"
        ? currentQuestionIndex === 0
          ? questions.length - 1
          : currentQuestionIndex - 1
        : currentQuestionIndex === questions.length - 1
        ? 0
        : currentQuestionIndex + 1;

    setCurrentQuestionIndex(newIndex);

    const nextQuestion = questions[newIndex];
    const firstCell = nextQuestion.cells[0];
    setSelectedCell({ x: firstCell.x, y: firstCell.y });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-[700px] w-[400px] bg-white rounded-lg shadow-[0px_3px_10px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
        <div className="cursor-auto flex p-2 flex-row-reverse">
          <a
            href="https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html"
            target="_blank"
            className="flex p-2"
          >
            <IoMdClose size={25} />
          </a>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-center">
            <a
              className="bg-white underline decoration-1 rounded-4xl text-xl text-[#5a82b4] font-bold text-center"
            >
              Get the App
            </a>
            <div>
              <Crucigrama
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
                userGrid={userGrid}
                currentQuestion={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                direction={direction}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
          <div>
            <div className="flex bg-[#a7d8ff] w-full h-[66px] justify-between items-center">
              <div className="p-2 items-center flex">
                <button onClick={() => handleChangeQuestion("previous")}>
                  <SlArrowLeft size={20} />
                </button>
                {currentQuestionIndex < questions.length && (
                  <span className="text-lg text-[21px] w-full pl-4 text-black tracking-tight">
                    {currentQuestion.question}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleChangeQuestion("next")}
                className="px-2"
              >
                <SlArrowRight size={20} />
              </button>
            </div>
            <div className="flex rounded-lg">
              <Keyboard
                input={input}
                setInput={setInput}
                onType={insertLetter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
