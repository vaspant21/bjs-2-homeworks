class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("Alarm ID is required.");
    }

    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error("This ID already exists.");
      return;
    }

    this.alarmCollection.push({
      id,
      time,
      callback,
    });
  }

  removeClock(id) {
    const index = this.alarmCollection.findIndex((alarm) => (alarm.id = id));

    if (index === -1) {
      return false;
    }

    this.alarmCollection.splice(index, 1);
    return true;
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours());
    const mins = String(now.getMinutes());
    return `${hours.padStart(2, "0")}:${mins.padStart(2, "0")}`;
  }

  start() {
    this.timerId ??= setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        this.checkClock(alarm);
      });
    });
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  checkClock(alarm) {
    if (alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm) => {
      console.log({ id: alarm.id, time: alarm.time });
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  const clock = new AlarmClock();

  clock.addClock(
    "09:17",
    () => {
      console.log("Alarm No. 1");
    },
    1
  );

  clock.addClock(
    "09:18",
    () => {
      console.log("Alarm No. 2");
      clock.removeClock(2);
    },
    2
  );

  clock.addClock(
    "09:19",
    () => {
      console.log("Alarm No. 3");
      clock.printAlarms();
      clock.clearAlarms();
    },
    3
  );

  clock.start();
}

testCase();