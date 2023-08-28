import { ChangeEvent } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div className={className}>
      <input
        className={styles.button}
        value={value}
        onChange={onChange}
        required={true}
        disabled={disabled}
      />
    </div>
  );
};
