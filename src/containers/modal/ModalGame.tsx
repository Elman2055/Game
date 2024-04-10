import "./ModalGame.css";

type TModal = {
    OnModal: VoidFunction;
}

const ModalGame = ({OnModal}: TModal) => {
    return (
        <div className="modalContainer">
            <h3>Congratulations, you found the icon !</h3>
            <button onClick={OnModal}>Reset</button>
        </div>
    )
}

export default ModalGame;