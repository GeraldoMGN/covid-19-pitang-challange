import {
  age, sameDay, sameMinute, ELDERLY_AGE,
} from '../utils/date.js';
import {
  get, update, remove, getAll as getAllRepository, add as addRepository,
} from '../repositories/schedules.js';

const getAll = () => getAllRepository().sort((a, b) => a.vaccinationDate - b.vaccinationDate);

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
  })).sort((a, b) => b.age - a.age).slice(-1)[0];

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

  addRepository({
    id: Date.now(),
    vaccinationDate: date,
    name: schedule.name,
    birthDate: new Date(schedule.birthDate),
    situation: 'scheduled',
  });

  return { message: 'Vacinação agendada!' };
};

const updateSituation = (id, newSituation) => {
  const schedule = get(id);

  if (!schedule) return { error: 'Agendamento não encontrado.' };

  schedule.situation = newSituation;
  update(id, schedule);

  return { message: 'Situação atualizada.' };
};

export { getAll, add, updateSituation };
