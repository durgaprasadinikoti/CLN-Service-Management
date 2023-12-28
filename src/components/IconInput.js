import styles from "./IconInput.module.css";

const IconInput = ({ placeholder, icon }) => {
  return (
    <div className={styles["icon-input-container"]}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles["input-field"]}
      />
      {icon !== "password" && (
        <div className={styles[`custom-${icon}-icon`]}></div>
      )}
      {icon === "password" && (
        <div className={styles['passwordInputContainer']}>
          <div className={styles[`custom-${icon}-icon`]}></div>
        </div>
      )}
    </div>
  );
};

export default IconInput;
