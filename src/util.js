import dayjs from "dayjs"; // импорт библиотеки для работы с датами

export function getMonth(month = dayjs().month()) {
  // функция, где в параметр передается текущий месяц  

  month = Math.floor(month); // округляем номер текущего месяца
  const year = dayjs().year(); // получаем текущий год
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // получаем первый день месяца в виде цифры
  let currentMonthCount = 0 - firstDayOfTheMonth; // счетчик месяца

  const daysMatrix = new Array(5).fill([]).map(() => {
    /* создается массив на 5 элементов, 
    с помощью метода fill каждый элемент превращается в массив, 
    далее с помощью метода map для каждого элемента массива выполняется функция */

    return new Array(7).fill(null).map(() => {
      /* Для каждого элемента массива функция возвращает массив из 7 элементов,
      заполненный null, далее с помощью map для каждого элемента из 7 выполняем функцию...*/

      currentMonthCount++; // увеличиваем счетчик месяца на 1

      return dayjs(new Date(year, month, currentMonthCount)); // возвращаем дату
    });
  });

  return daysMatrix; // возвращаем матрицу дней
}
