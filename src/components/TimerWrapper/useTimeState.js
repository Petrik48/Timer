import {useEffect, useState} from "react";

export default (initialValue) => {
  const [seconds, setSeconds] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);
  const [markedTimes, setIsMarkedTimes] = useState([]);
  const [startedTime, setStartedTime] = useState(seconds);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const flagTime = () => {
    if (seconds !== 0 && !markedTimes.includes(seconds)) {
      setIsMarkedTimes([...markedTimes, seconds])
    }
  }

  const setNewHours = (newHours) => {
    const leftSeconds = newHours * 3600 + seconds % 3600;
    setStartedTime(leftSeconds);
    setSeconds(leftSeconds);
    setIsMarkedTimes([]);
  }

  const setNewMinutes = (newMinutes) => {
    const leftSeconds = newMinutes * 60 + seconds - (seconds % 3600 - seconds % 3600 % 60);
    setStartedTime(leftSeconds);
    setSeconds(leftSeconds);
    setIsMarkedTimes([]);
  }

  const setNewSeconds = (newSeconds) => {
    const leftSeconds = newSeconds + seconds - seconds % 3600 % 60;
    setStartedTime(leftSeconds);
    setSeconds(leftSeconds);
    setIsMarkedTimes([]);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds === 0) {
      clearInterval(interval);
      toggle();
    } else if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds-1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return {
    seconds,
    isActive,
    toggle,
    flagTime,
    markedTimes,
    setNewHours,
    setNewMinutes,
    setNewSeconds,
    startedTime
  }
}