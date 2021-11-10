import React, {useState} from 'react';
import styles from './tme.module.scss';

const Time = ({leftTime, isActive, setNewTime}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (!isActive) {
      setIsOpen(true);
    }
  }

  const onSubmit = (event) => {
    const newTIme = event.currentTarget[0].value;
    if (newTIme) {
      setNewTime(parseInt(newTIme));
    }
    setIsOpen(false);
  }

  const validate = (event) => {
    let theEvent = event || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  return (
    <div className={styles.time}>
      {
        isOpen
          ? <form onBlur={onSubmit} className={styles.form}>
            <input type="text" onKeyPress={validate} maxLength={2} />
          </form>
          : <span onClick={onClick}>{leftTime}</span>
      }
    </div>
  )
}

export default Time;
