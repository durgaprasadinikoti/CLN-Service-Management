import styles from './Checkbox.module.css';
const Checkbox = ({label}) => {
    return(
        <div className={styles["checkbox-container"]}>
            <input type="checkbox" className={styles["custom-checkbox"]} />
            <label for={label} className={styles["checkbox-label"]}></label>
            <span className={styles["remember-me-label"]}>{label}</span>
      </div>
    )

}

export default Checkbox;