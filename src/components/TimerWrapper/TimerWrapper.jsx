import styles from './timerWrapper.module.scss';
import Timer from "./TImer/Timer";
import TimerButtonsWrapper from "./TimerButtonsWrapper/TimerButtonsWrapper";

const TimerWrapper = ({
                        seconds,
                        isActive,
                        toggle,
                        flagTime,
                        setNewHours,
                        setNewMinutes,
                        setNewSeconds,
                        startedTime
                      }) => {

  return (
    <div className={styles.timerWrapper}>
      <Timer isActive={isActive}
             seconds={seconds}
             setNewHours={setNewHours}
             setNewMinutes={setNewMinutes}
             setNewSeconds={setNewSeconds}
             startedTime={startedTime} />
      <TimerButtonsWrapper isActive={isActive}
                           toggleTimer={toggle}
                           flagTime={flagTime}
                           seconds={seconds}
      />
    </div>
  )
}

export default TimerWrapper;
        