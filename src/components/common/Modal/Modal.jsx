import classes from "./Modal.module.css";
import clsx from "clsx";

const Modal = ({
  isActive,
  onClose,
  className,
  backButton,
  children,

  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal
        )}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
