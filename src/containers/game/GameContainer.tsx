import { useState, useEffect } from "react";
import Game from "../../components/Game";
import "./GameContainer.css";
import data from "./GameContainer.data";
import ModalGame from "../modal/ModalGame";

export type TContainer = {
  class: string;
  meaning: string;
};

const GameContainer = () => {
  const [meaning, setMeaning] = useState<TContainer[]>(data);
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const RandomMeaning = () => {
    const random = Math.floor(Math.random() * meaning.length);
    const copyMeaning = [...meaning];
    copyMeaning[random] = { ...copyMeaning[random], meaning: "O" };
    setMeaning(copyMeaning);
  };

  const OnClickHandler = (index: number) => {
    const copy = [...meaning];
    if (copy[index].class !== "open") {
      copy[index] = { ...copy[index], class: "open" };
      setMeaning(copy);
      setCounter((prevCounter) => prevCounter + 1);
    }
    if (copy[index].meaning === "O") {
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (flag) {
      RandomMeaning();
      setFlag(false);
    }
  }, [flag]);

  const OnReset = () => {
    setMeaning(data);
    setCounter(0);
    setFlag(true);
    setShowModal(false);
  };

  useEffect(() => {
    RandomMeaning();
  }, []);

  return (
    <div className={"GameContainer"}>
      <div className="meaningContainer">
        {meaning.map((elem, index) => (
          <Game
            key={index}
            class={elem.class}
            meaning={elem.meaning}
            OnClickHandler={() => OnClickHandler(index)}
          />
        ))}
      </div>
      <div className="resetCounter">
        <div className="counter">Попыток - {counter}</div>
        <button className="reset" onClick={OnReset}>
          Reset
        </button>
      </div>
      {showModal && <ModalGame OnModal={OnReset}/>}
    </div>
  );
};

export default GameContainer;
