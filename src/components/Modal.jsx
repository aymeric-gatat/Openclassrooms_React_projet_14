import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/modal.scss";

const Modal = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const ErrorMessage = useSelector((state) => state.modal.errorMessage);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {ErrorMessage ? (
          <>
            <h2>Formulaire Incomplet</h2>
            <p>Des champs dans votre formulaire doivent être remplis.</p>
          </>
        ) : (
          <>
            <h2>Formulaire Validé</h2>
            <p>Votre formulaire a été validé avec succès !</p>
          </>
        )}
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
