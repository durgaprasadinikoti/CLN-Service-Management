import styles from '../styles/login.module.css';
import IconInput from '@/components/IconInput';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

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

                    <div className={styles.passwordRemberContainer}>
                        <div className={styles['checkboxContainer']}>
                            <Checkbox label={'Remember me'}/>
                        </div>
                        <div className={styles['forgot-password-container']}>
                            <span className={styles['forgot-password-label']}>Forgot password?</span>
                        </div>
                    </div>

                    <div className={styles['button-container']}>
                        <Button>Sign In</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;