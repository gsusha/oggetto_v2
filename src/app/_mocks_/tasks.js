import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const TASK_NAME = [
  'Декларативный подход',
  'Функциональное программирование',
  'ООП - принципы',
  'Переменные PHP',
  'Функциональное тестирование'
];

const TASK_DESCRIPTION = [
  'Переписать функцию в декларативном стиле',
  'Что такое функциональное программирование',
  'Описать принципы ООП',
  'Выбрать верный вид тестирования',
  'Написать правильный код'
];

// ----------------------------------------------------------------------

const tasks = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: TASK_NAME[index],
  description: TASK_DESCRIPTION[index],
  topic: sample(['Frontend', 'Backend', 'QA']),
  level: sample(['Intern', 'Junior', 'Middle', 'Senior'])
}));

export default tasks;
