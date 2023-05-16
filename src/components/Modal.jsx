import "./Modal.css"

function Modal ({title, cancel, keep}) {
    return (
    <div>
        <div className="modal">
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
                <button className="btn btn__cancel">g</button>
                <button className="btn">f</button>
            </div>
        </div>
        <div className="backdrop" />
    </div>
    )
}

export default Modal;