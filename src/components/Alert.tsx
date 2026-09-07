interface AlertProps {
  children: string;
  onCloseClick: () => void;
}

const Alert = ({ children, onCloseClick }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>hello hello hello !</strong> fancy seeing you here
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onCloseClick}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
