import React from 'react';
import styles from './pauseIcon.module.scss';

const PauseIcon = (props) => {
  return (
    <div className={styles.pauseIcon}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 33.25H17.5V8.75H10.5V33.25ZM24.5 8.75V33.25H31.5V8.75H24.5Z" fill="#FFB800"/>
      </svg>
    </div>
  )
}

export default PauseIcon;
