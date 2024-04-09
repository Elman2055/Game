import "./Game.css";

type TGame = {
  class: string;
  meaning: string;
  OnClickHandler: VoidFunction;
};

const Game = (props: TGame) => {
  return (
    <div className="Game">
      <div className={props.class} onClick={props.OnClickHandler}>
        <p>{props.meaning}</p>
      </div>
    </div>
  );
};

export default Game;
