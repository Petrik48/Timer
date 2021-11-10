import React from 'react';
import styles from './playIcon.module.scss';

const PlayIcon = (props) => {
  return (
    <div className={styles.playIcon}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8.75V33.25L33.25 21L14 8.75Z" fill="#FFB800" />
      </svg>
    </div>
  )
}

export default PlayIcon;
