import {
  age, sameDay, sameMinute, ELDERLY_AGE,
} from '../utils/date.js';

const schedules = [];

const getAll = () => [...schedules];

const remove = (id) => schedules.splice(
  schedules.findIndex((elem) => elem.id === id), 1,
);

const schedulesOnDay = (date) => getAll().reduce((acc, cur) => (
  sameDay(date, cur.vaccinationDate) ? acc.concat(cur) : acc), []);

const canScheduleOnDay = (date) => {
  const schedulesToday = schedulesOnDay(date);
  return schedulesToday.length < 20;
};

const schedulesOnTime = (date) => getAll().reduce((acc, cur) => (
  sameDay(date, cur.vaccinationDate) && sameMinute(date, cur.vaccinationDate)
    ? acc.concat(cur)
    : acc), []);

const canScheduleOnTime = (date) => {
  const schedulesToday = schedulesOnTime(date);
  return schedulesToday.length < 2;
};

const removeScheduleForElderly = (date) => {
  const schedulesToday = schedulesOnTime(date);
  const olderAtTime = schedulesToday.map((item) => ({
    age: age(item.birthDate),
    id: item.id,
  })).sort((a, b) => a.age - b.age).slice(-1)[0];

  if (olderAtTime && olderAtTime.age < ELDERLY_AGE) remove(olderAtTime.id);
};

const add = (schedule) => {
  const date = new Date(schedule.vaccinationDate);
  const birthDate = new Date(schedule.birthDate);
  const isElderly = age(birthDate) > ELDERLY_AGE;

  if (isElderly) {
    removeScheduleForElderly(date);
  }

  if (!canScheduleOnTime(date)) {
    return { error: 'Limite de agendamento para esta hora atingido, tente outro horário.' };
  }

  if (!canScheduleOnDay(date)) return { error: 'Limite de agendamento para este dia atingido, tente outro dia.' };

  schedules.push({
    id: Date.now(),
    vaccinationDate: date,
    name: schedule.name,
    birthDate: new Date(schedule.birthDate),
  });

  return { message: 'Vacinação agendada!' };
};

export { getAll, add };
