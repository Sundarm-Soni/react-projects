import { useState } from "react";
import Modal from "./modal";
const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal popup</button>
      {showModalPopup && (
        <Modal body={<div>Customized body</div>} onClose={onClose} />
      )}
    </div>
  );
};

export default ModalTest;
