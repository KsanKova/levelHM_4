
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];
console.log (`ValueMin: ${Math.min(...array)}`)

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
console.log (multiply(100,200,83902,1230)) // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}
const {price, count} = product;

function totalPrice(item) {
  return price * count;
}
console.log(`TotalPrice: ${totalPrice()}`)

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
    'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
  ]
const predictsArr2 = [
  'Планирование времени поможет вам не опоздать на встречу.',
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
]  
const obj = {
    predictions1: [],
    predictions2: [],
        setPredictions(arr) {
        const{predictsArr1} = this;
        const{predictsArr2} = this;
        },
        showPrediction() {
          const numPredictions1 = Math.floor(Maht.random() * this.predictsArr1.length);
          const numPredictions2 = Math.floor(Math.random() * this.predictsArr2.length);
          return predictsArr1[numPredictions1]; predictsArr2[numPredictions2];
        },
        takeNumber() {
          const{}
        },
}
const predictions = obj;
predictions.setPredictions(predictsArr);