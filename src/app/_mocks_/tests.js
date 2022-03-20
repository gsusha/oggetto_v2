import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const TASK_NAME = [
  'Тест на джуна 18.03',
  'Тест на миддла',
  'На тестировку 3.04',
  'Тест для хакатона',
  'Стажёрский'
];

const TASK_DESCRIPTION = [
  'Функциональное программирование, ООП',
  'Базовые знания языка',
  'Простые вопросы по теории',
  'Много вопросов с кодом',
  'Лёгкий, но скорее на джуна+'
];

// ----------------------------------------------------------------------

const tests = [...Array(5)].map((_, index) => {
  const timer = `${faker.datatype.number({
    min: 0,
    max: 2,
    precision: 1
  })}ч:${faker.datatype.number({ min: 0, max: 59, precision: 1 })}м`;
  return {
    id: faker.datatype.uuid(),
    name: TASK_NAME[index],
    description: TASK_DESCRIPTION[index],
    topic: sample(['Frontend', 'Backend', 'QA']),
    level: sample(['Intern', 'Junior', 'Middle', 'Senior']),
    time: timer
  };
});

export default tests;
