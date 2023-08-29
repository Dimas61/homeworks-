class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId;
    }

    addClock (time, callback) {

        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.find(elem => elem.time !== undefined)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(elem => elem.time !== time);
    }

    getCurrentFormattedTime () {
        let date = new Date();
        let hour = date.getHours();
        let minut = date.getMinutes();
        hour = hour < 10 ? '0' + hour : hour;
        minut = minut < 10 ? '0' + minut : minut;
        return `${hour}:${minut}`
    }

    start () {
       if (this.intervalId !== undefined) {
        return;
       } else {
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((elem) => {
                if ((this.getCurrentFormattedTime() === elem.time) && elem.canCall === true) {
                    elem.canCall = false;
                    elem.callback();
                }
            })
        }, 1000);
       }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(elem => elem.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
