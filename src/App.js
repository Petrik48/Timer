import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import TimerWrapper from "./components/TimerWrapper/TimerWrapper";
import StopTimes from "./components/StopTimes/StopTimes";
import useTimeState from "./components/TimerWrapper/useTimeState";

const App = (props) => {
  const {
    seconds,
    isActive,
    toggle,
    flagTime,
    markedTimes,
    setNewHours,
    setNewMinutes,
    setNewSeconds,
    startedTime
  } = useTimeState(10);

  return (
    <div className="app">
      <Header />
      <TimerWrapper seconds={seconds}
                    isActive={isActive}
                    toggle={toggle}
                    flagTime={flagTime}
                    setNewHours={setNewHours}
                    setNewMinutes={setNewMinutes}
                    setNewSeconds={setNewSeconds}
                    startedTime={startedTime}
      />
      <StopTimes markedTimes={markedTimes} />
    </div>
  );
}

export default App;
