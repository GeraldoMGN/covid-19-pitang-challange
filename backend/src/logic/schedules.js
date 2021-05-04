import { sameDay, sameMinute } from '../utils/date.js';

const schedules = [];

const getAll = () => [...schedules];

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

const add = (schedule) => {
  const date = new Date(schedule.vaccinationDate);

  if (!canScheduleOnDay(date)) return { error: 'Too many scheduled vaccinations on this day.' };
  if (!canScheduleOnTime(date)) return { error: 'Too many scheduled vaccinations at this time.' };

  schedules.push({
    vaccinationDate: date,
    name: schedule.name,
    birthDate: new Date(schedule.birthDate),
  });

  return { message: 'Vaccination scheduled.' };
};

export { getAll, add };
