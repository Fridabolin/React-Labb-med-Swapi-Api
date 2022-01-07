import ReactDOM  from "react-dom"
import './Modal.css'



const Modal = ({open, children, onClose}) => {


    if (!open) return null

    return ReactDOM.createPortal (
        <div  className="Overlay_styles">
        <div className="Modal_styles">
           <button className="button_Style" onClick={onClose}>Close</button>
           {children}    
        </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal

// När modulen öppnas visas "barnen" i modulen i getCharacters och en knapp som stänger modulen 