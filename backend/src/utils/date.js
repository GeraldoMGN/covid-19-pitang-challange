const ELDERLY_AGE = 65;

const age = (birthDate) => {
  const diffMilliseconds = Date.now() - birthDate.getTime();
  const ageDt = new Date(diffMilliseconds);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
};

const sameDay = (first, second) => (
  first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate());

const sameMinute = (first, second) => (
  sameDay(first, second)
    && first.getHours() === second.getHours()
    && first.getMinutes() === second.getMinutes());

export {
  sameDay, sameMinute, age, ELDERLY_AGE,
};
