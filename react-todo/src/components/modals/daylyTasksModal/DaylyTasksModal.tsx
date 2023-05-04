import React, { FC } from "react";
import ModalFooter from "../modalFooter/ModalFooter";
import ModalTitle from "../modalTitle/ModalTitle";

type DaylyModalProps = { modalHandler: () => void };

const DaylyTasksModal: FC<DaylyModalProps> = ({ modalHandler }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Good Morning" />

          <ModalFooter
            buttonOK="Ok"
            cancelHandler={modalHandler}
            addHandler={() => null}
          />
        </div>
      </div>
    </>
  );
};

export default DaylyTasksModal;
