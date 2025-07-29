import { useDispatch } from "react-redux";
import DatePicker from "../components/DatePicker";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";

export default function Test() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation du formulaire
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Champs du formulaire */}
        <button type="submit">Valider</button>
      </form>
      <Modal />
    </div>
  );
}
