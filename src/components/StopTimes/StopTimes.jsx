import React from 'react';
import styles from './stopTimes.module.scss';
import Fade from 'react-reveal/Fade';

const StopTimes = ({markedTimes}) => {
    return (
        <div className={styles.stopTimes}>
          {
            markedTimes.map(time => {
              const leftHours = ('0' + Math.floor(time / 3600)).slice(-2);
              const leftMinutes = ('0' + Math.floor(Math.floor(time % 3600 / 60))).slice(-2);
              const leftSeconds = ('0' + Math.floor(time % 3600 % 60)).slice(-2);
              return <Fade bottom key={time}><span className={styles.stopTime}>{leftHours}:{leftMinutes}:{leftSeconds}</span></Fade>
            })
          }
        </div>
    )
 }
 
 export default StopTimes;
        