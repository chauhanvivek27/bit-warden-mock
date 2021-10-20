import React from "react";
import PropTypes from "prop-types";
import filterStyles from "../../styles/modal.module.scss";

export default function Model({ children, onClose }) {
  const OnHandleClose = () => {
    onClose();
  };
  return (
    <div className={filterStyles.modal}>
      <div className={filterStyles.modal_content}>
        <span className={filterStyles.close_button} onClick={OnHandleClose}>
          X
        </span>
        {children}
      </div>
    </div>
  );
}

Model.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Model.defaultProps = {
  children: [],
  onClose: () => {},
};
