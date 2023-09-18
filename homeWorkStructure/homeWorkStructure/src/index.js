// Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
// у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
//
//     const words = ["apple", "banaNA", "kiWi", "ORANGE"];
//
// console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

function capitalizeStrings(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words));


// Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.
//
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
//
// console.log(findCommonElements(array1, array2)); // [3, 4, 5]
function findCommonElements(arr1, arr2) {
    const sameElements = []
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i]
        if (arr2.includes(element)) {
            sameElements.push(element)
        }
    }
    return sameElements
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

//Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
//
// sum - сума всіх елементів масиву
// average - середнє значення елементів масиву
// min - мінімальне значення в масиві
// max - максимальне значення в масиві
//
// const numbers = [1, 2, 3, 4, 5];
//
// console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

function analyzeArray(arr) {
    // Перевірка на пустий масив
    if (arr.length === 0) {
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined,
        };
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return {
        sum: sum,
        average: sum / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers));
