import styles from './timer.module.scss';
import Time from "./Time/Time";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

const Timer = ({
                 isActive,
                 seconds,
                 setNewHours,
                 setNewMinutes,
                 setNewSeconds,
                 startedTime
               }) => {
  const leftHours = ('0' + Math.floor(seconds / 3600)).slice(-2);
  const leftMinutes = ('0' + Math.floor(Math.floor(seconds % 3600 / 60))).slice(-2);
  const leftSeconds = ('0' + Math.floor(seconds % 3600 % 60)).slice(-2);

  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        key={startedTime}
        isPlaying={isActive}
        duration={startedTime}
        initialRemainingTime={seconds}
        rotation={"counterclockwise"}
        colors={'#FFB800'}
        size={500}
      >
        {/* {renderTime} */}
      </CountdownCircleTimer>
      <div className={styles.timesWrapper}>
        <Time leftTime={leftHours} isActive={isActive} setNewTime={setNewHours} /> {':'}
        <Time leftTime={leftMinutes} isActive={isActive} setNewTime={setNewMinutes} /> {':'}
        <Time leftTime={leftSeconds} isActive={isActive} setNewTime={setNewSeconds} />
      </div>
    </div>
)
}
export default Timer;
        