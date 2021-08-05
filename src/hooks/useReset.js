const useReset = (resetFunction, targetTimes) => {
  const getTargetDate = ({
    hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
  }) => {
    const targetDate = new Date();

    targetDate.setHours(hour);
    targetDate.setMinutes(minute);
    targetDate.setSeconds(second);
    targetDate.setMilliseconds(millisecond);

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
