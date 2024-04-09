import "./ModalGame.css";

type TModal = {
    OnModal: VoidFunction;
}

const ModalGame = ({OnModal}: TModal) => {
    return (
        <div className="modalContainer">
            <h3>Ну ты и лошара, хохляндия...</h3>
            <button onClick={OnModal}>Согласен</button>
        </div>
    )
}

export default ModalGame;