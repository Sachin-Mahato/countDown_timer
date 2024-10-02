export const howManyDaysLeftInYear = () => {
    const now = new Date();
    const cyy = now.getFullYear();
    const cmm = now.getMonth();
    const cdd = now.getDay();
    const ch = now.getHours(); // current hours
    const cmi = now.getMinutes();
    const csec = now.getSeconds();
    const currentDateObj = new Date(cyy,cmm, cdd,ch,cmi,csec);
    const lastDateOfYear = new Date(cyy, 11, 31,23, 59, 59);

    const timeDiff = lastDateOfYear - currentDateObj;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    const minutes = Math.floor(timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
        daysLeft,
        hours,
        minutes,
        seconds
    }

}