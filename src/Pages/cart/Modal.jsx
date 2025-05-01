// src/Components/Modal.jsx
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
          >
            ×
          </button>
          {title && <h2 className="text-2xl font-bold mb-4 text-center text-black">{title}</h2>}
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  