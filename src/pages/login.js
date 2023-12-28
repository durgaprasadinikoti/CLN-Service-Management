import styles from '../styles/login.module.css';
import IconInput from '@/components/IconInput';

const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}></div>
                </div>
                <div className={styles.loginBodyContainer}>
                    <div className={styles.loginTitle}>Sign In</div>
                    <div className={styles.inputContainer}>
                        <IconInput placeholder={'Enter your Email id'} icon={'user'} />
                    </div>

                    <div className={styles.inputContainer}>
                         <IconInput placeholder={'Enter your password'} icon={'password'} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;