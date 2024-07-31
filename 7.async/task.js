const callback = () => {
  console.log('tik-tak');
};

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    const existingAlarm = this.alarmCollection.find((alarm) => {
      alarm.time === time;
    });
    if (existingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time
    );
  }

  getCurrentFormattedTime() {
    const time = new Date().toLocaleTimeString('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return time;
  }

  start() {
    if (this.intervalId) {
      return null;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (
          alarm.time === this.getCurrentFormattedTime() &&
          alarm.canCall === true
        ) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const alarm900 = new AlarmClock();
alarm900.addClock('10:00', callback);
alarm900.addClock('10:00', callback);
alarm900.removeClock('10:00');
alarm900.addClock('11:00', callback);
alarm900.start();
console.log(alarm900.getCurrentFormattedTime());
