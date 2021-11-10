import React from 'react';
import styles from './tImerButtonsWrapper.module.scss';
import Button from "../../common/Button/Button";
import PlayIcon from "../../../assets/icons/PlayIcon/PlayIcon";
import FlagIcon from "../../../assets/icons/FlagIcon/FlagIcon";
import PauseIcon from "../../../assets/icons/StopIcon/PauseIcon";

const TimerButtonsWrapper = ({isActive, toggleTimer, flagTime, seconds}
) => {
  return (
    <div className={styles.timerButtonsWrapper}>
      {
        isActive
          ? <Button func={toggleTimer} seconds={seconds} child={<PauseIcon />} />
          : <Button func={toggleTimer} seconds={seconds} child={<PlayIcon />} />
      }
      <Button func={flagTime} seconds={seconds} child={<FlagIcon />} />
    </div>
  )
}

export default TimerButtonsWrapper;
