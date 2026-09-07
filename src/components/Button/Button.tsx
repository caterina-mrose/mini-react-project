import styles from "./Button.module.css";
import { useState } from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
      className={isHovered ? styles.customButtonHovered : styles.customButton}
    >
      {children}
    </button>
  );
};

export default Button;
