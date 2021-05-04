let schedules = [];

const get = (id) => schedules.find((elem) => elem.id === id);

const getAll = () => [...schedules];

const add = (schedule) => schedules.push(schedule);

const update = (id, schedule) => {
  schedules[schedules.findIndex((elem) => elem.id === id)] = schedule;
};

const remove = (id) => {
  schedules.splice(schedules.findIndex((elem) => elem.id === id), 1);
};

const removeAll = () => {
  schedules = [];
};

export {
  get, getAll, add, update, remove, removeAll,
};
