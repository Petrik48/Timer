import React from 'react';
import styles from './button.module.scss';

const Button = ({func, child, seconds}) => {

  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={func} disabled={seconds === 0}>
        {child}
      </button>
      <span className={styles.buttonBg}></span>
    </div>
  )
}

export default Button;
        