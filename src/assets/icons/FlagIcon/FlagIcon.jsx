import React from 'react';
import styles from './flagIcon.module.scss';

const FlagIcon = (props) => {
  return (
    <div className={styles.flagIcon}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.2 10.5L24.5 7H8.75V36.75H12.25V24.5H22.05L22.75 28H35V10.5H25.2Z" fill="#FFB800" />
      </svg>
    </div>
  )
}

export default FlagIcon;
