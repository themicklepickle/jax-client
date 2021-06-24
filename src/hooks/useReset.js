const useReset = (resetFunction, targetTimes) => {
  const getTargetDate = (target) => {
    const targetDate = new Date();

    targetDate.setHours(target.hour);
    targetDate.setMinutes(target.minutes);
    targetDate.setSeconds(0);
    targetDate.setMilliseconds(0);

    return targetDate;
  };

  const toMilliseconds = (date) => {
    return (
      date.getHours() * 3.6e6 +
      date.getMinutes() * 6e4 +
      date.getSeconds() * 1000 +
      date.getMilliseconds()
    );
  };

  const getTimeout = (target) => {
    const now = new Date();
    const targetDate = getTargetDate(target);

    const timeout = toMilliseconds(targetDate) - toMilliseconds(now);

    if (timeout <= 0) {
      return timeout + 24 * 3.6e6;
    }

    return timeout;
  };

  targetTimes.forEach((targetTime) => {
    const timeout = getTimeout(targetTime);

    setTimeout(() => {
      resetFunction();

      setInterval(resetFunction, 24 * 3.6e6);
    }, timeout);
  });
};

export default useReset;
